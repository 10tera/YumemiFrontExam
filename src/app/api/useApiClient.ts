import { ApiClient } from "./ApiClient";

type Props = {
  apiKey: string | undefined;
};

export const useApiClient = ({ apiKey }: Props) => {
  if (apiKey) return new ApiClient(apiKey);
  return undefined;
};
