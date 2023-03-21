import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import { ApiProvider } from "../src/app/api/ApiContext/ApiProvider";
type AllProvidersProps = {
  children: React.ReactElement;
};

const AllProviders = ({ children }: AllProvidersProps) => {
  return (
    <BrowserRouter>
      <ApiProvider>{children}</ApiProvider>
    </BrowserRouter>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  render(ui, { wrapper: AllProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
