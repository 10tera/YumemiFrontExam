import { useState, useRef, useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useApiContext } from "../api/ApiContext/useApiContext";
import { PopulationQueryResponse } from "../types";

type Props = {
  populations: PopulationQueryResponse[];
};

export const useGraph = ({ populations }: Props) => {
  const apiContext = useApiContext();
  const [selectedMode, setSelectedMode] = useState("総人口");
  const handleDataModeSelectChange = (mode: string) => {
    setSelectedMode(mode);
  };
  const highchartsOptions: Highcharts.Options = {
    title: {
      text: selectedMode,
    },
  };
  const series = useMemo(() => {
    if (populations.length === 0) return [];
    return populations.map((population) => ({
      id: population.prefCode,
      index: population.prefCode,
      name: apiContext?.prefData.filter((p) => p.prefCode === population.prefCode)[0].prefName,
      data: population.data.result.data.filter((d) => d.label === selectedMode)[0].data.map((d) => [d.year, d.value]),
    }));
  }, [populations, selectedMode]);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return { series, handleDataModeSelectChange, highchartsOptions, chartComponentRef };
};
