import { useFetchPopulation } from "./useFetchPopulation";

type Props = {
  prefectures: number[];
  apiKey: string;
};

export const useFetchPopulationQueries = (props: Props) => {
  const results = props.prefectures.map((pref) => useFetchPopulation({ apiKey: props.apiKey, prefCode: pref }));
  return Promise.all(results);
};
