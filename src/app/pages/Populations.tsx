import {Fragment,useEffect,useContext} from "react";
import {ApiContext} from "../api/ApiContext/ApiContext";

export const Populations = () => {
    const apiContext = useContext(ApiContext);
    /*
    useEffect(() => {
        console.log(apiContext?.apiKey);
        console.log(apiContext?.prefData);
    },[]);
    */
    return(
        <Fragment>
            <h1>populations page</h1>
        </Fragment>
    )
}