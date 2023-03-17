import React, { useState, useRef, useMemo, useContext, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DataModeSelect } from "../molecules/DataModeSelect";
import { useGraph } from "../../logic/useGraph";
import { PopulationQueryResponse } from "../../types";

type Props = {
  populations: PopulationQueryResponse[];
};

export const Graph = ({ populations }: Props) => {
  const { handleDataModeSelectChange, chartComponentRef, highchartsOptions, series } = useGraph({
    populations: populations,
  });
  return (
    <div>
      <DataModeSelect setSelectedMode={handleDataModeSelectChange} />
      <HighchartsReact ref={chartComponentRef} highcharts={Highcharts} options={{ ...highchartsOptions, series }} />
    </div>
  );
};
