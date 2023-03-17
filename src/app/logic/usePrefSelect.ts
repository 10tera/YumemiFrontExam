import { useState, useMemo } from "react";
import { useApiContext } from "../api/ApiContext/useApiContext";
import { Prefecture, PrefectureSelect } from "../types/index";

export const usePrefSelect = () => {
  const apiContext = useApiContext();
  const initIsCheckList: PrefectureSelect[] | undefined = useMemo(() => {
    return apiContext?.prefData.map((pref: Prefecture) => {
      return { isCheck: false, prefCode: pref.prefCode, prefName: pref.prefName };
    });
  }, [apiContext?.prefData]);
  const [isCheckList, setIsCheckList] = useState<{ isCheck: boolean; prefCode: number; prefName: string }[]>(
    initIsCheckList || [],
  );
  const handlePrefecturesCheckBox = (isCheck: boolean, prefCode: number) => {
    setIsCheckList((prev) =>
      prev?.map((val) =>
        val.prefCode === prefCode ? { isCheck: isCheck, prefCode: val.prefCode, prefName: val.prefName } : val,
      ),
    );
  };

  return { isCheckList, handlePrefecturesCheckBox };
};
