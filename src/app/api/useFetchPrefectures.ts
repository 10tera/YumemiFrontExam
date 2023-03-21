import { useApiClient } from "./useApiClient";

type Props = {
  apiKey: string;
};

export const useFetchPrefectures = async ({ apiKey }: Props) => {
  const apiClient = useApiClient({ apiKey: apiKey });
  if (apiClient === undefined) {
    throw new Error("api client is undefined");
  }
  try {
    const data = await apiClient?.getPrefectures();
    return { data: data?.result };
  } catch (error) {
    throw error;
  }
};
