/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React from "react";

const textFieldCss = css({
    border: "none",
    borderBottom: "1px solid",
    width: "100%",
    ":focus": {
        outline: "none"
    },
});

type Props = {
    errorMessage: string;
    isError: boolean
}

export const ErrorText = ({errorMessage,isError}: Props) => {
    return(
        <React.Fragment>
            {isError ? <p css={textFieldCss}>{errorMessage}</p> : null}
        </React.Fragment>
    )
}