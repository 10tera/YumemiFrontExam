import React, { ReactNode, useState } from "react";
import { ApiContext } from "./ApiContext";
import { Prefecture } from "../../types/index";

type Props = {
  children: ReactNode;
};

export const ApiProvider = (props: Props) => {
  const [apiKey, setApiKey] = useState<string | undefined>(undefined);
  const [prefData, setPrefData] = useState<Prefecture[]>([]);
  return (
    <ApiContext.Provider value={{ apiKey: apiKey, setApiKey: setApiKey, prefData: prefData, setPrefData: setPrefData }}>
      {props.children}
    </ApiContext.Provider>
  );
};
