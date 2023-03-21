/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import { CheckBox } from "../atoms/CheckBox";
import { PrefectureSelect } from "../../types/index";
import { Button } from "../atoms/Button";

const prefSelectCss = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
});

type Props = {
  isCheckList: PrefectureSelect[];
  handlePrefecturesCheckBoxChange: (isCheck: boolean, prefCode: number) => void;
};

export const PrefSelect = ({ isCheckList, handlePrefecturesCheckBoxChange }: Props) => {
  const setIsCheck = (isCheck: boolean, prefCode: number) => {
    handlePrefecturesCheckBoxChange(isCheck, prefCode);
  };
  return (
    <div css={prefSelectCss}>
      {isCheckList.map((pref, _index) => {
        return (
          <CheckBox
            isCheck={pref.isCheck}
            setIsCheck={setIsCheck}
            prefName={pref.prefName}
            prefCode={pref.prefCode}
            key={`prefSelectCheckBox${pref.prefCode}`}
          ></CheckBox>
        );
      })}
    </div>
  );
};
