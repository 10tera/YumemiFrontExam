/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import { ReactNode } from "react";

const TitleCss = css({
  textAlign: "center",
  wordBreak: "keep-all",
});

type Props = {
  children: ReactNode;
};

export const SecondTitle = ({ children }: Props) => {
  return <h2 css={TitleCss}>{children}</h2>;
};
