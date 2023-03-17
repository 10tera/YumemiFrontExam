import { ApiClient } from "./ApiClient";
import { PopulationQueryResponse } from "../types/index";

type Props = {
  apiKey: string;
  prefCode: number;
};

export const useFetchPopulation = async (props: Props): Promise<PopulationQueryResponse> => {
  const client = new ApiClient(props.apiKey);
  try {
    const data = await client.getPopulations(props.prefCode);
    return { prefCode: props.prefCode, data: data };
  } catch (error) {
    throw error;
  }
};
