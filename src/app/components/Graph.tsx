import {useState} from "react";
import { DataModeSelect } from "../components/DataModeSelect";

export const Graph = () => {
    const [selectedMode,setSelectedMode] = useState("総人口");
    const handleDataModeSelectChange = (mode: string) => {
        setSelectedMode(mode);
    }
    return(
        <div>
            <DataModeSelect setSelectedMode={handleDataModeSelectChange}/>
        </div>
    )
}