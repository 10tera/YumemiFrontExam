import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./api/ApiContext/ApiProvider";

export const App = () => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <App />
      </ApiProvider>
    </BrowserRouter>
  );
};
