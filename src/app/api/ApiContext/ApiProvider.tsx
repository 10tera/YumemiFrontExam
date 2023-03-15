import React, { ReactNode, useState } from "react";
import { ApiContext } from "./ApiContext";

type Props = {
  children: ReactNode;
};

export const ApiProvider = (props: Props) => {
  const [apiKey, setApiKey] = useState<string | undefined>(undefined);
  return <ApiContext.Provider value={{ apiKey: apiKey, setApiKey: setApiKey }}>{props.children}</ApiContext.Provider>;
};
