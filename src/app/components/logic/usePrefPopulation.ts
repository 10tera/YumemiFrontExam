import {useMemo,useContext,useState, useEffect} from "react";
import { ApiContext } from "../../api/ApiContext/ApiContext";
import { useFetchPopulationQueries } from "../../api/useFetchPopulationQueries";
import {PrefectureSelect,PopulationQueryResponse} from "../../types/index";

type Props = {
    isCheckList: PrefectureSelect[]
}

export const usePrefPopulation = (props: Props) => {
    const apiContext = useContext(ApiContext);
    const [populations,setPopulations] = useState<PopulationQueryResponse[]>([]);
    const cachedPopulations = useMemo(() => populations,[populations]);
    useEffect(() => {
        const fetchPopulations = async () => {
            if(!apiContext?.apiKey)return;
            const selectPrefectures: number[] = [];
            props.isCheckList.map((pref) => {
                if(pref.isCheck)selectPrefectures.push(pref.prefCode);
            });
            try{
                const res = await useFetchPopulationQueries({apiKey:apiContext?.apiKey,prefectures:selectPrefectures});
                setPopulations(res);
            }
            catch(error){

            }
        }
        fetchPopulations();
    },[props.isCheckList]);
    return {populations,cachedPopulations};
}