import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./api/ApiContext/ApiProvider";
import { Router } from "../router/router";

export const App = () => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <Router />
      </ApiProvider>
    </BrowserRouter>
  );
};
