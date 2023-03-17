import React,{useState,useRef,useMemo,useContext,useEffect} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DataModeSelect } from "../components/DataModeSelect";
import { ApiContext } from "../api/ApiContext/ApiContext";
import { PopulationQueryResponse } from "../types";

type Props = {
    populations: PopulationQueryResponse[];
}

export const Graph = (props: Props) => {
    const apiContext = useContext(ApiContext);
    const [selectedMode,setSelectedMode] = useState("総人口");
    const handleDataModeSelectChange = (mode: string) => {
        setSelectedMode(mode);
    }
    const highchartsOptions: Highcharts.Options = {
        title: {
            text: selectedMode
        },
        series: [{
            type: "line",
            data: [1,2,3]
        }]
    }
    const series = useMemo(() => {
        if(props.populations.length === 0)return [];
        return props.populations.map((population) => ({
            id: population.prefCode,
            index: population.prefCode,
            name: apiContext?.prefData.filter((p) => p.prefCode === population.prefCode)[0].prefName,
            data: population.data.result.data.filter((d) => d.label === selectedMode)[0].data.map((d) => [d.year,d.value])
        }))
    },[props.populations,selectedMode]);

    useEffect(() => {
        console.log("config");
        console.log(series);
        console.log(apiContext?.prefData);
    },[series])
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
    return(
        <div>
            <DataModeSelect setSelectedMode={handleDataModeSelectChange}/>
            <HighchartsReact ref={chartComponentRef} highcharts={Highcharts} options={{...highchartsOptions,series}}/>
        </div>
    )
}