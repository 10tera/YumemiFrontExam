import {Fragment,useEffect,useContext} from "react";
import {ApiContext} from "../api/ApiContext/ApiContext";
import { Title } from "../components/Title";
import { PrefSelect } from "../components/PrefSelect";
import { SecondTitle } from "../components/SecondTitle";
import { Graph } from "../components/Graph";

import { usePrefSelect } from "../components/logic/usePrefSelect";
import {usePrefPopulation} from "../components/logic/usePrefPopulation";

export const Populations = () => {
    const {isCheckList,handlePrefecturesCheckBox} = usePrefSelect();
    const {populations,cachedPopulations} = usePrefPopulation({isCheckList:isCheckList});

    useEffect(() => {
        console.log(populations);
    },[populations])

    useEffect(() => {
        console.log(cachedPopulations);
    },[cachedPopulations])
    
    return(
        <Fragment>
            <section>
                <Title>都道府県別人口構成</Title>
            </section>
            <section>
                <SecondTitle>都道府県選択</SecondTitle>
                <PrefSelect isCheckList={isCheckList} handlePrefecturesCheckBox={handlePrefecturesCheckBox}/>
            </section>
            <section>
                <SecondTitle>人口構成グラフ</SecondTitle>
                <Graph/>
            </section>
        </Fragment>
    )
}