import {Fragment, useEffect} from "react";
import { ApiClient } from "../api/ApiClient";
import {PrefecturesResponse} from "../types/index";
import { Title } from "../components/Title";
import { InputApiKey } from "../components/InputApiKey";

export const ApiKeyInput = () => {
    useEffect(() => {
        /*
        const client = new ApiClient("PnbCsiJ2bnp9rHi6EPajDRUsgDdoQKapcjC7SUzd");
        client.getPrefectures().then((data) => {
            console.log(data);
        });
        */
    },[]);
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