import "@testing-library/jest-dom";
import { renderHook, act, waitFor } from "@testing-library/react";
import { usePrefSelect } from "../../src/app/logic/usePrefSelect";
import { MockWrapper } from "../MockWrapper";



describe("usePrefSelect.ts",() => {
    it("データ数の確認",() => {
        const {result} = renderHook(() => usePrefSelect(),{
            wrapper: MockWrapper,
        });
        waitFor(() => expect(result.current.isCheckList.length).toBe(3),{timeout: 1000});
    });
    it("チェックボックスクリック時の関数の動作確認",() => {
        const { result } = renderHook(() => usePrefSelect(), {
            wrapper: MockWrapper,
        });
        act(() => {
            setTimeout(() => {
                result.current.handlePrefecturesCheckBox(true,2);
                const target = result.current.isCheckList.filter((data) => data.prefCode === 2)[0];
                waitFor(() => expect(target.isCheck).toBe(true),{timeout: 5000});
            },1000);
        });
    });
});