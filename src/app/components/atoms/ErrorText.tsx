/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React from "react";

const errorMessageCss = css({
  color: "red",
});

type Props = {
  errorMessage: string;
  isError: boolean;
};

export const ErrorText = ({ errorMessage, isError }: Props) => {
  return <React.Fragment>{isError ? <p css={errorMessageCss}>{errorMessage}</p> : null}</React.Fragment>;
};
