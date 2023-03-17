import React from "react";
import { ErrorText } from "../atoms/ErrorText";
import {InputText} from "../atoms/InputText";

type Props = {
    label: string;
    errorMessage: string;
    value: string;
    isError: boolean;
    handleTextChange: (value: string) => void;
}


export const TextField = ({label,errorMessage,value,isError,handleTextChange}: Props) => {
    return(
        <React.Fragment>
            <InputText label={label} value={value} handleTextChange={handleTextChange}/>
            <ErrorText errorMessage={errorMessage} isError={isError}/>
        </React.Fragment>
    )
}