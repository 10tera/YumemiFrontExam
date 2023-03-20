/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React, { ChangeEventHandler, MouseEventHandler } from "react";

const labelCss = css({
  display: "flex",
});

type Props = {
  prefName: string;
  prefCode: number;
  isCheck: boolean;
  setIsCheck: (isCheck: boolean, prefCode: number) => void;
};

export const CheckBox = ({ prefName, prefCode, isCheck, setIsCheck }: Props) => {
  const handleCheckBoxChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsCheck(event.target.checked, prefCode);
  };
  const handleTextClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    setIsCheck(!isCheck, prefCode);
  }
  return (
    <React.Fragment>
      <label htmlFor={prefName} css={labelCss}>
        <input type={"checkbox"} name={prefName} onChange={handleCheckBoxChange} checked={isCheck} />
        <div onClick={handleTextClick}>{prefName}</div>
      </label>
    </React.Fragment>
  );
};
