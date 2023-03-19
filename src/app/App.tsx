import { HashRouter } from "react-router-dom";
import { ApiProvider } from "./api/ApiContext/ApiProvider";
import { Router } from "../router/router";

export const App = () => {
  return (
    <HashRouter>
      <ApiProvider>
        <Router />
      </ApiProvider>
    </HashRouter>
  );
};
