import {Fragment, useEffect} from "react";
import { Title } from "../components/Title";
import { InputApiKey } from "../components/InputApiKey";

export const ApiKeyInput = () => {
    return(
        <Fragment>
            <section>
                <Title>
                    ゆめみ<wbr />
                    フロントエンド<wbr />
                    課題
                </Title>
            </section>
            <section>
                <InputApiKey/>
            </section>
        </Fragment>
    )
}