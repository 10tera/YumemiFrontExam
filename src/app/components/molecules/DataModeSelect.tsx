/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import { ChangeEventHandler } from "react";

const DataModeSelectCss = css({
  border: "none",
  borderBottom: "1px solid",
  outline: "none",
  ":active": {
    outline: "none",
  },
});

type Props = {
  setSelectedMode: (mode: string) => void;
};

export const DataModeSelect = ({ setSelectedMode }: Props) => {
  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSelectedMode(event.target.value);
  };
  return (
    <select css={DataModeSelectCss} onChange={handleSelectChange}>
      <option>総人口</option>
      <option>年少人口</option>
      <option>生産年齢人口</option>
      <option>老年人口</option>
    </select>
  );
};
