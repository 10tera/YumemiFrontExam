/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";

type Props = {
  name: string;
  onClick: () => void;
};

const buttonCss = css({
  width: "100%",
  height: "30px",
  margin: "20px auto auto auto",
  borderRadius: "15px",
  border: "1px solid",
  backgroundColor: "white",
  ":active": {
    backgroundColor: "gray",
  },
});

export const Button = ({ name, onClick }: Props) => {
  return (
    <button type={"button"} css={buttonCss} onClick={onClick}>
      {name}
    </button>
  );
};
