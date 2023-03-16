/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import {useContext,useState} from "react";
import { ApiContext } from "../api/ApiContext/ApiContext";
import { CheckBox } from "./CheckBox";

const prefSelectCss = css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
});

export const PrefSelect = () => {
    const apiContext = useContext(ApiContext);
    const [isCheckList,setIsCheckList] = useState<boolean[]>(Array(apiContext?.prefData.length ? apiContext.prefData.length + 1 : 0).fill(false));
    const handleCheckBoxChange = (isCheck: boolean,prefCode: number) => {
        const newIsCheckList = [...isCheckList];
        console.log("change");
        console.log(prefCode);
        newIsCheckList.map((val,index) => {
            if(index === prefCode){
                newIsCheckList[index] = isCheck;
            }
        });
        setIsCheckList(newIsCheckList);
    }
    return(
        <div css={prefSelectCss}>
            {
                apiContext?.prefData.map((pref,index) => {
                    return(
                        <CheckBox isCheck={isCheckList[pref.prefCode]} setIsCheck={handleCheckBoxChange} prefName={pref.prefName} prefCode={pref.prefCode} key={`prefSelectCheckBox${pref.prefCode}`}></CheckBox>
                    )
                })
            }
            <p onClick={() => {
                console.log(isCheckList);
            }}>button</p>
        </div>
    )
}