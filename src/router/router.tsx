import {Routes,Route} from "react-router-dom";
import { ApiKeyInput } from "../app/pages/ApiKeyInput";
import { Populations } from "../app/pages/Populations";

export const Router = () => {
    return(
        <Routes>
            <Route path={"/"} element={<ApiKeyInput/>}/>
            <Route path={"/populations"} element={<Populations/>}/>
            <Route path={"/a"} element={<h1>aaa</h1>} />
        </Routes>
    )
}