import { createContext, Dispatch, SetStateAction } from "react";

type ApiContextValue = {
  apiKey: string | undefined;
  setApiKey: Dispatch<SetStateAction<string | undefined>>;
};

export const ApiContext = createContext<ApiContextValue | undefined>(undefined);
