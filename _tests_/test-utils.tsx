import * as React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ApiProvider } from "../src/app/api/ApiContext/ApiProvider";

type AllProvidersProps = {
  children: React.ReactElement;
};

const AllProviders = ({ children }: AllProvidersProps) => {
  return(
    <ApiProvider>{children}</ApiProvider>
  );
};

const customRender = (ui: React.ReactElement,options?: Omit<RenderOptions,"wrapper">) => {
    render(ui,{wrapper:AllProviders,...options});
};

export * from "@testing-library/react";
export {customRender as render}