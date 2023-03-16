/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import {useState,useReducer} from "react";
import { TextField } from "./TextField"
import { Button } from "./Button"

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
    const [state, dispatch] = useReducer(reducer, initialState);
    const initError = () => {
        dispatch({type: "setIsError",payload: false});
        dispatch({type: "setErrorMessage",payload: ""});
    }
    const startButtonClick = () => {
        initError();
        console.log("clicked");
        console.log(state.apiKey);
        if(state.apiKey.length === 0){
            dispatch({type: "setIsError",payload: true});
            dispatch({type: "setErrorMessage",payload: "APIキーを入力してください"});
        }
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