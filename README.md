# 株式会社ゆめみ様のフロントエンドコーディングテストリポジトリ
## はじめに
このリポジトリは株式会社ゆめみ様のフロントエンドコードチェックのリポジトリです。  
コードレビューをする方へ、ぜひREADME.mdやDetail.mdを一読していただけるとありがたいです。

## 詳細な内容
[Detail.md](/document/Detail.md)にだらだらと色んな事を書いてあります。

## 環境構築
このリポジトリをクローンして動かしたい方に向けて、定義したコマンドについて説明します。  
基本的にライブラリ管理に今回はyarn使ってみたのでコマンドは全てyarnで記載します。  
### リポジトリのクローン
```
git clone https://github.com/10tera/YumemiFrontExam.git
```
### ライブラリインストール
```
yarn install
```
### 開発サーバー起動
基本開発時はこれを使います
```
yarn run dev
```
### ビルド(開発モード)
開発モードでビルドします。ビルド後のファイルを確認したいときに使うコマンドです。(そんな機会起きなかったけど...)
```
yarn run build:dev
```
### ビルド(本番モード)
本番モードでビルドします。基本これでビルドしてプッシュします。
```
yarn run build:prod
```
### テスト実行
その名の通りテストを実行します。
```
yarn run test
```
### フォーマット
eslintとprettierを組み合わせて一緒にフォーマットしてくれます。
```
yarn run format
```
### eslintのみ
eslintのみ動かす時のコマンドです。基本上のコマンドがあるので使いません。
```
yarn run lint
```
## Github Pages
今回作ったものを公開するにあたりGithub Pagesを採用しました。理由としては使用経験があるのと、Github Actionsを使った時にGithub内で完結することができそうと思ったからです。  
ビルド先のdocsに変更があったときだけ自動デプロイされるようにCIを構築しました(Github Actions)。また自動テスト実行もされます。

## 技術スタック
* React
* webpack
* TypeScript
* HighCharts
* jest
* @testing-library/*
* nock
* eslint
* prettier
* @babel
* @emotion
* axios  
などなどなどなど


