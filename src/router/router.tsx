import { Routes, Route } from "react-router-dom";
import { ApiKeyInput } from "../app/components/pages/ApiKeyInput";
import { Populations } from "../app/components/pages/Populations";
import { RequireApi } from "../app/components/RequireApi";

export const Router = () => {
  return (
    <Routes>
      <Route index path={"/"} element={<ApiKeyInput />} />
      <Route
        path={"/populations"}
        element={
          <RequireApi>
            <Populations />
          </RequireApi>
        }
      />
      <Route path={"*"} element={<p>404</p>} />
    </Routes>
  );
};
