/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import {ChangeEventHandler, Fragment} from "react";



type Props = {
    prefName: string;
    prefCode: number;
    isCheck: boolean;
    setIsCheck: (isCheck: boolean,prefCode:number) => void;
}

export const CheckBox = (props: Props) => {
    const handleCheckBoxChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        props.setIsCheck(event.target.checked,props.prefCode);
    }
    return(
        <Fragment>
            <label htmlFor={props.prefName}>
                <input type={"checkbox"} name={props.prefName} onChange={handleCheckBoxChange} checked={props.isCheck}/>
                {props.prefName}
            </label>
        </Fragment>
    )
}