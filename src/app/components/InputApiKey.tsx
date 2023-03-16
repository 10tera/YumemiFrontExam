/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import {useContext, useReducer} from "react";
import {useNavigate} from "react-router-dom";
import { TextField } from "./TextField"
import { Button } from "./Button"
import { ApiClient } from "../api/ApiClient";
import {ApiContext} from "../api/ApiContext/ApiContext";
import {} from "../types/index";

const InputAreaCss = css({
    width: "300px",
    height: "auto",
    padding: "50px",
    margin: "100px auto auto auto",
    borderRadius: "15px",
    boxShadow: "rgb(145 158 171 / 60%) -24px 24px 72px -8px",
});

type State = {
    apiKey: string,
    isError: boolean,
    errorMessage: string,
};

const initialState: State = {
    apiKey: "",
    isError: false,
    errorMessage: "",
}

type Action =
    | { type: "setApiKey", payload: string }
    | { type: "setIsError", payload: boolean }
    | { type: "setErrorMessage",payload: string};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "setApiKey":
            return { ...state, apiKey: action.payload };
        case "setIsError":
            return { ...state, isError: action.payload };
        case "setErrorMessage":
            return { ...state, errorMessage: action.payload};
        default:
            return state;
    }
}

export const InputApiKey = () => {
    const navigate = useNavigate();

    const apiContext = useContext(ApiContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const initError = () => {
        dispatch({type: "setIsError",payload: false});
        dispatch({type: "setErrorMessage",payload: ""});
    }

    //
    const startButtonClick = () => {
        initError();
        if(state.apiKey.length === 0){
            dispatch({type: "setIsError",payload: true});
            dispatch({type: "setErrorMessage",payload: "APIキーを入力してください"});
            return;
        }
        const client = new ApiClient(state.apiKey);
        client.getPrefectures().then((data) => {
            apiContext?.setApiKey(state.apiKey);
            apiContext?.setPrefData(data.result);
            navigate("/populations");
        }).catch((error: Error) => {
            dispatch({type: "setIsError",payload: true});
            dispatch({type: "setErrorMessage",payload: error.message});
        });
    }
    const handleTextFieldChange = (value: string) => {
        dispatch({type: "setApiKey",payload: value});
    }
    return(
        <div css={InputAreaCss}>
            <TextField label={"APIキー"} setApiKey={handleTextFieldChange} apiKey={state.apiKey} errorMessage={state.errorMessage} isError={state.isError}/>
            <Button name={"始める"} onClick={startButtonClick}/>
        </div>
    )
}