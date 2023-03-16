import {Fragment,useEffect,useContext} from "react";
import {ApiContext} from "../api/ApiContext/ApiContext";
import { Title } from "../components/Title";
import { PrefSelect } from "../components/PrefSelect";
import { SecondTitle } from "../components/SecondTitle";
import { DataModeSelect } from "../components/DataModeSelect";
import { Graph } from "../components/Graph";

export const Populations = () => {
    const apiContext = useContext(ApiContext);
    
    useEffect(() => {
        console.log(apiContext?.apiKey);
        console.log(apiContext?.prefData);
    },[]);
    
    return(
        <Fragment>
            <section>
                <Title>都道府県別人口構成</Title>
            </section>
            <section>
                <SecondTitle>都道府県選択</SecondTitle>
                <PrefSelect/>
            </section>
            <section>
                <SecondTitle>人口構成グラフ</SecondTitle>
                <DataModeSelect/>
                <Graph/>
            </section>
        </Fragment>
    )
}