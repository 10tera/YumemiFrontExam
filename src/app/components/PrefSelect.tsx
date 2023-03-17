/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import {useContext,useState} from "react";
import { ApiContext } from "../api/ApiContext/ApiContext";
import { CheckBox } from "./atoms/CheckBox";
import {PrefectureSelect} from "../types/index";

const prefSelectCss = css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
});

type Props = {
    isCheckList: PrefectureSelect[];
    handlePrefecturesCheckBox: (isCheck: boolean, prefCode: number) => void;
}

export const PrefSelect = (props: Props) => {
    const setIsCheck = (isCheck: boolean, prefCode: number) => {
        props.handlePrefecturesCheckBox(isCheck,prefCode);
    }
    return(
        <div css={prefSelectCss}>
            {
                props.isCheckList.map((pref,index) => {
                    return(
                        <CheckBox isCheck={pref.isCheck} setIsCheck={setIsCheck} prefName={pref.prefName} prefCode={pref.prefCode} key={`prefSelectCheckBox${pref.prefCode}`}></CheckBox>
                    )
                })
            }
            <p onClick={() => {
                console.log(props.isCheckList);
            }}>button</p>
        </div>
    )
}