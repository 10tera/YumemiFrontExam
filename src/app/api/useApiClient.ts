import { ApiClient } from "./ApiClient"

type Props = {
    apiKey: string | undefined;
}

export const useApiClient = ({apiKey}: Props) => {
    if(!apiKey) throw new Error("set apiKey is undefined");
    return new ApiClient(apiKey);
}