# 色んな事を長々と書く場所です
## 開発がどんな感じで進んだか
簡潔にまとめると1日目に簡単な環境構築をして、2,3日目で求められた機能を完成させて、残りでテストコードを書いたり、CI構築したりしました。
### 1日目(3/15)
* ビルド設定/初期設定
* APIキー取得
* APIキーをどこでも参照できるようにするためのApiProviderの作成
合計時間：大体約3時間
### 2日目(3/16)
* axiosを使ったデータ取得の確認
* APIキー入力画面の作成
* Emotionの導入/移行
* 県データを保持するためのApiProviderの変更
* 県選択チェックボックスの作成
* どの種類のデータを表示するかの選択UIの作成  
合計時間：大体約6時間
### 3日目(3/17)
* ビューとロジックの分離
* 人口データの取得
* 人口構成APIのキャッシュ化
* 人口データの描画
* 必要とされる機能はここで全部完成した
* リファクタリング(View/Logicの分離,命名,ディレクトリ構成)  
合計時間：大体約8時間
### 4日目(3/18)
* テスト環境の構築(jest/testing-library/react)
* components/atoms以下についてのテストコードのコーディング  
合計時間：大体約4時間
### 5日目(3/19)
* Github Acitonsを用いた自動デプロイ環境の構築
* nockを用いたAPI処理のテスト環境の構築  
合計時間：大体約6時間
### 6日目(3/20)
* テスト書き書き
合計時間：大体約4時間
### 7日目(3/21)
* カスタムフックのテスト書き書き
* オリジナル要素で都道府県選択UIに全チェック機能を付けた  
合計時間：大体4時間

総合計時間：35時間（ただ正確に時間を計っていたわけでもなく、途中で他事をするときもあったりしたので正確な時間は分かりませんでした。期間としては1週間で終わらせました。）

## いろいろ
### ディレクトリ構造について
```
.
├── _tests_ /(テストコード置き場)
│   ├── components(UIコンポーネントのテスト)
│   └── hook(カスタムフックのテスト)
├── github(Github Actionsの定義)
├── docs(ビルド先)
├── document(ドキュメント)
├── public(静的アセット,今回はindex.html)
└── src/(基本的なコードはこの下に)
    ├── app/
    │   ├── api(API呼び出しや、取得されたデータの保持関連)
    │   ├── components/(UIコンポーネント,Atomic Designに則った構造)
    │   │   ├── atoms
    │   │   ├── molecules
    │   │   ├── organisms
    │   │   └── pages
    │   ├── logic(View/Logic分離の際に分離されたLogicの方、主にカスタムフック)
    │   └── types(型定義ファイルの置き場)
    ├── constants(定数ファイルの置き場)
    └── router(ルーター設定)
```
今回、「試験でよく見ているポイント」を参考にして初めてAtomic Designを取り入れてみました。
components以下の構造は変に自分自信で決定しても混乱するだけなのでまんまの名前にしました。
APIをfetchしたりするコードはクラス化することで使いまわしできるようにして、apiに配置しました。
### テストについて
以前jestをちょっとだけ触ったことがあるのですが、Reactでテストを今回のように書くのは初めての試みでした。どんな内容のテストを書けばいいのかも分からない状態からだったので、まず調べて「UIの表示確認」、「カスタムフックの動作確認」、「APIで取得されたデータを取り込めているか」の3つの内容のテストを目標として開発を進めました。「UIの表示確認」にはReactのテストで良く使われている@testing-library/reactなどを使用しました。「カスタムフックの動作確認」にもそれに入っている機能を使ってテストしました。また「APIデータの取得」が絡んでくる処理のテストでは、実際にAPIを叩くのではなく、疑似的に違うリクエストに差し替える必要がありました。mockを使えば実現しそうな感じはしたのですが、一から環境構築するのも大変そうだったのでnockライブラリを使って簡単に構築しました。テストで一番苦労した点はテスト環境の動作が高速すぎて処理が追い付かないという現象が発生してしまったことです。具体的にhook(useStateやuseReducer)で状態管理をしているときに、状態を変化させた後すぐにその変化させた状態を使用するとまだ変化していないということが起きました。そこでテストではsetTimeoutやwaitForなどを使用しました。ただwaitForは公式が提供している機能なので良いのですが、setTimeoutはテストの汚染に繋がってしまいそうだなと思い、そこが反省点だと思いました。
### API通信のキャッシュ化
今回使用したAPIは取得されるデータが逐次変わるようなものではなく、年単位で固定されるようなデータのため、キャッシュ化できそうだと最初の時点で感じました。キャッシュ化する方法として、Reactと相性のいいReact-query/axios-interseptorsなどが挙げられましたが、今回は自前で実装することにしました(axiosと組み合わせて使うキャッシュライブラリはなぜかエラーで動かなかった...)。データの保存先としてはブラウザのstorage機能を用い、session storageに保存しました。保存するのは人口構成データのみで、都道府県データは保存しませんでした。理由としては何回もfetchするようなデータでないのと、都道府県データの取得を用いてAPIキーが有効かを判定しているため、キャッシュすると意味がなくなってしまうからです。
### useMemoを使ったキャッシュ
useMemoを使ったキャッシュは一部の処理にのみ適用しました。都道府県の数をNとしたときに、計算量がO(N)以上かかる処理に主に適用しました。他のすべての処理に適用することもできましたが、処理が重くないものに適用しても大して意味がないどころか逆効果になってしまう可能性も感じたため適用しませんでした。
### ビューとロジックの分離/Atomic Design
よく見ているポイントとして「ビューとロジックの分離」が挙げられていたのでリファクタリングでは特に意識しました。結果的に各コンポーネントは基本的にUIのみの内容となり、個人的な感想として分離は成功したと思います。またコンポーネントをAtomic Designで分けて、ロジック、カスタムフックを使用するのはorganisms以上としました。Atomic Designにはもう一つtemplatesがあると思いますが、今回の題材では要素数が少なく必要にならなかったので使いませんでした。
### 各種環境構築について
テストの構築ではimport構文を認識してくれなかったり、JSX要素を認識しなかったりと苦労しました(このあたりをまとめて一括で構築してくれるライブラリがあったら良いなと...)。あと今回初めてCIを構築しました。背景として自動デプロイとテストの自動実行を実現したかったことが挙げられます。デグレを防ぐ手段として、テストを頻繁に動かすことが挙げられ、ローカル環境で定期的に動かすのは勿論の事、コミットしてプッシュしたときにテストを必ず実行する環境を作ることで機能破壊を防ぐようにしました。ただCIの構築でエラーがたくさん出てコミットが汚染されてしまったのが反省点です。ただどこでエラーが出ていたのか何が原因だったのかを理解することが出来たので次からはたくさんのコミットを出すことなく構築できると思います。
### Reactコンポーネントの型をどうするか問題
型としてJSX.Element/VFC/FCなどが挙げられると思うのですが今回はJSX.Elementで統一しました。いろいろな記事でこれについての議論がされているのですが、調べたうえでFC/VFCは使わなくてもいいのではと思い使いませんでした。使うメリットがchildrenを暗黙的に使えるくらいで、それくらいなら自分で書いてしまったほうが逆に統一性が増す気がしました。型定義のコードでごちゃごちゃするくらいなら簡潔にしたほうがいいのかなと、個人的な意見です。
### 機能に加えたオリジナル要素
「見た目はぜひ個性を活かしたUIにしてください（かなり推奨）」とのことで、デザイン力は自信がないので、cssはなるべく素朴のままで、UIにちょっとだけあるものを追加してみました。都道府県選択部分にでかでかとあると思うボタン、それです。全てのチェックボックスにチェックを入れる、ただそれだけの機能ですが、ユーザー目線になったときにそういった機能が求められそうとのことで作りました。実装時間は10分もかからなかったです。Atomic Designに則ってボタンを分けて定義してあったのがここで役に経ちました。ボタンの大きさが横いっぱいなのは強調したかったからです（ちょっと変だけど個性的なUIということにしておきます）。
### 画面遷移について
APIキー入力画面と人口構成データ表示画面の2つを作りました。APIキー入力画面はどんな状態でもアクセスすることができますが、人口構成データページの方はAPIキーが内部で保持されている状態でないとアクセスされず、APIキー入力画面にリダイレクトされるような仕様にしました。
### やってみたら面白そうだと思った事
人口構成データのグラフを共有したいとなったときにURLで直接チェックボックスのチェックを変化できるようにしたら面白そうだとは思ったのですが、そうするとAPIキーもURLに含めなければいけなくなり、セキュリティの観点から今回は実装を見送りました。  
例：https://---.github.io/---/?3=true
