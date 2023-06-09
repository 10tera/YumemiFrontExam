import React from "react";
import { Title } from "../atoms/Title";
import { InputApiKey } from "../organisms/InputApiKey";

export const ApiKeyInput = () => {
  return (
    <React.Fragment>
      <section>
        <Title>
          ゆめみ
          <wbr />
          フロントエンド
          <wbr />
          課題(コードチェック)
        </Title>
      </section>
      <section>
        <InputApiKey />
      </section>
    </React.Fragment>
  );
};
