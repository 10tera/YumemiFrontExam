import {ReactElement,useEffect} from "react";
import { ApiProvider } from "../src/app/api/ApiContext/ApiProvider";
import { useApiContext } from "../src/app/api/ApiContext/useApiContext";

type Props = {
    children: ReactElement
}

const InitApiContext = ({children}: Props) => {
    const apiContext = useApiContext();
    useEffect(() => {
        apiContext?.setApiKey("validKey");
        apiContext?.setPrefData([
            {
                prefCode: 1,
                prefName: "test1",
            },
            {
                prefCode: 2,
                prefName: "test2",
            },
            {
                prefCode: 3,
                prefName: "test3",
            }
        ]);
    },[]);

    return (
        <div>
            {children}
        </div>
    )
}

export const MockWrapper = ({children}: Props) => {
    return(
        <ApiProvider>
            <InitApiContext>
                {children}
            </InitApiContext>
        </ApiProvider>
    )
};