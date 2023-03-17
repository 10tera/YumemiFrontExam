import React,{ChangeEventHandler} from "react";

type Props = {
    prefName: string;
    prefCode: number;
    isCheck: boolean;
    setIsCheck: (isCheck: boolean,prefCode:number) => void;
}

export const CheckBox = ({prefName,prefCode,isCheck,setIsCheck}: Props) => {
    const handleCheckBoxChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setIsCheck(event.target.checked,prefCode);
    }
    return(
        <React.Fragment>
            <label htmlFor={prefName}>
                <input type={"checkbox"} name={prefName} onChange={handleCheckBoxChange} checked={isCheck}/>
                {prefName}
            </label>
        </React.Fragment>
    )
}