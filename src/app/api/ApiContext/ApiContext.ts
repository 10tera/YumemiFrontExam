import { createContext, Dispatch, SetStateAction } from "react";
import {Prefecture} from "../../types/index";

type ApiContextValue = {
  apiKey: string | undefined;
  setApiKey: Dispatch<SetStateAction<string | undefined>>;
  prefData: Prefecture[];
  setPrefData: Dispatch<SetStateAction<Prefecture[]>>;
};

export const ApiContext = createContext<ApiContextValue | undefined>(undefined);
