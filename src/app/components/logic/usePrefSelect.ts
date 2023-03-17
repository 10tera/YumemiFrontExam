import {useContext,useState} from "react";
import {ApiContext} from "../../api/ApiContext/ApiContext";
import {Prefecture, PrefectureSelect} from "../../types/index";

export const usePrefSelect = () => {
    const apiContext = useContext(ApiContext);
    const initIsCheckList: PrefectureSelect[] | undefined = apiContext?.prefData.map((pref: Prefecture) => {
        return {isCheck: false,prefCode: pref.prefCode,prefName:pref.prefName};
    });
    const [isCheckList, setIsCheckList] = useState<{isCheck: boolean,prefCode: number,prefName: string}[]>(
        initIsCheckList || []
    );
    const handlePrefecturesCheckBox = (isCheck: boolean, prefCode: number) => {
        setIsCheckList((prev) => prev?.map((val) => (val.prefCode === prefCode ? { isCheck: isCheck, prefCode: val.prefCode, prefName: val.prefName } : val)));
    };

    return {isCheckList,handlePrefecturesCheckBox};
}