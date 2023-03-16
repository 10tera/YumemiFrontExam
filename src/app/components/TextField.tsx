/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import {css} from "@emotion/react";
import React,{useReducer,Fragment,Dispatch,SetStateAction} from "react";

type Props = {
    label: string;
    errorMessage: string;
    apiKey: string;
    isError: boolean;
    setApiKey: (value: string) => void;
}

const textFieldCss = css({
    border: "none",
    borderBottom: "1px solid",
    width: "100%",
    ":focus": {
        outline: "none"
    },
});

const errorMessageCss = css({
    fontSize: "15px",
    color: "red",
});

export const TextField = (props: Props) => {
    const inputValueChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        props.setApiKey(event.target.value);
    }
    return(
        <Fragment>
            <input type="text" placeholder={props.label} css={textFieldCss} onChange={inputValueChange} value={props.apiKey}></input>
            {props.isError? <p css={errorMessageCss}>{props.errorMessage}</p>:null}
        </Fragment>
    )
}