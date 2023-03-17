/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React from "react";

const inputTextCss = css({
    border: "none",
    borderBottom: "1px solid",
    width: "100%",
    ":focus": {
        outline: "none"
    },
});

type Props = {
    label: string;
    value: string;
    handleTextChange: (value: string) => void;
}

export const InputText = ({label,value,handleTextChange}: Props) => {
    const handleInputTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        handleTextChange(event.target.value)
    }
    return(
        <input css={inputTextCss} type={"text"} placeholder={label} value={value} onChange={handleInputTextChange}></input>
    )
}