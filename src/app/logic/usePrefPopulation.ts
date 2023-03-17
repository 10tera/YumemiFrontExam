import { useMemo, useState, useEffect } from "react";
import { useApiContext } from "../api/ApiContext/useApiContext";
import { useFetchPopulationQueries } from "../api/useFetchPopulationQueries";
import { PrefectureSelect, PopulationQueryResponse } from "../types/index";

type Props = {
  isCheckList: PrefectureSelect[];
};

export const usePrefPopulation = (props: Props) => {
  const apiContext = useApiContext();
  const [populations, setPopulations] = useState<PopulationQueryResponse[]>([]);
  useEffect(() => {
    const fetchPopulations = async () => {
      if (!apiContext?.apiKey) return;
      const selectPrefectures: number[] = [];
      props.isCheckList.map((pref) => {
        if (pref.isCheck) selectPrefectures.push(pref.prefCode);
      });
      try {
        const res = await useFetchPopulationQueries({ apiKey: apiContext?.apiKey, prefectures: selectPrefectures });
        setPopulations(res);
      } catch (error) {
        return;
      }
    };
    fetchPopulations();
  }, [props.isCheckList]);
  const memoPopulations = useMemo(() => populations, [populations]);
  return { populations: memoPopulations };
};
