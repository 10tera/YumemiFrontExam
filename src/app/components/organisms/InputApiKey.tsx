/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import { TextField } from "../molecules/TextField"
import { Button } from "../atoms/Button"
import { useInputApiKey } from "../../logic/useInputApiKey";

const InputAreaCss = css({
    width: "300px",
    height: "auto",
    padding: "50px",
    margin: "100px auto auto auto",
    borderRadius: "15px",
    boxShadow: "rgb(145 158 171 / 60%) -24px 24px 72px -8px",
});


export const InputApiKey = () => {
    const {state,handleStartButtonClick,handleTextFieldChange} = useInputApiKey();
    return(
        <div css={InputAreaCss}>
            <TextField label={"APIキー"} handleTextChange={handleTextFieldChange} value={state.apiKey} errorMessage={state.errorMessage} isError={state.isError}/>
            <Button name={"始める"} onClick={handleStartButtonClick}/>
        </div>
    )
}