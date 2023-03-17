import {useContext} from "react";
import { ApiContext } from "./ApiContext";

export const useApiContext = () => {
    return useContext(ApiContext);
}