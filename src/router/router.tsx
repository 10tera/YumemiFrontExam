import {Routes,Route} from "react-router-dom";
import { ApiKeyInput } from "../app/pages/ApiKeyInput";
import { Populations } from "../app/pages/Populations";

export const Router = () => {
    return(
        <Routes>
            <Route index path={"/"} element={<ApiKeyInput/>}/>
            <Route path={"/populations"} element={<Populations/>}/>
            <Route path={"*"} element={<p>404</p>} />
        </Routes>
    )
}