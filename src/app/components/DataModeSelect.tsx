/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";

const DataModeSelectCss = css({
    alignItems: "center"
});

export const DataModeSelect = () => {
    return(
        <select>
            <option>総人口</option>
            <option>年少人口</option>
            <option>生産年齢人口</option>
            <option>老年人口</option>
        </select>
    )
}