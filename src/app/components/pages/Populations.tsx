import {Fragment,useEffect,useContext} from "react";
import {ApiContext} from "../../api/ApiContext/ApiContext";
import { Title } from "../atoms/Title";
import { PrefSelect } from "../PrefSelect";
import { SecondTitle } from "../SecondTitle";
import { Graph } from "../Graph";

import { usePrefSelect } from "../../logic/usePrefSelect";
import {usePrefPopulation} from "../../logic/usePrefPopulation";

export const Populations = () => {
    const {isCheckList,handlePrefecturesCheckBox} = usePrefSelect();
    const {populations} = usePrefPopulation({isCheckList:isCheckList});

    useEffect(() => {
        console.log(populations);
    },[populations])

    
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
                <Graph populations={populations}/>
            </section>
        </Fragment>
    )
}