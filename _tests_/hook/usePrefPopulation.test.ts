import "@testing-library/jest-dom";
import { renderHook, waitFor } from "@testing-library/react";
import nock from "nock";
import { init } from "../nockApi";
import { usePrefPopulation } from "../../src/app/logic/usePrefPopulation";
import { MockWrapper } from "../MockWrapper";
import { PrefectureSelect } from "../../src/app/types";


describe("usePrefPopulation.ts",() => {
    beforeEach(() => {
        nock.cleanAll();
        jest.clearAllMocks();
    });
    afterEach(() => {
        nock.cleanAll();
        jest.clearAllMocks();
    });
    const testisCheckList: PrefectureSelect[] = [
        {
            isCheck: false,
            prefCode: 1,
            prefName: "test1",
        },
        {
            isCheck: false,
            prefCode: 2,
            prefName: "test2",
        },
        {
            isCheck: false,
            prefCode: 3,
            prefName: "test3",
        },
    ];
    init();
    it("データ数の確認",() => {
        const {result,rerender} = renderHook((props) => usePrefPopulation(props),{
            wrapper: MockWrapper,
            initialProps: {
                isCheckList: testisCheckList
            }
        });
        expect(result.current.populations.length).toBe(0);
        testisCheckList[0].isCheck = true;
        testisCheckList[1].isCheck = true;
        rerender({isCheckList: testisCheckList});
        waitFor(() => expect(result.current.populations.length).toBe(2),{timeout: 5000});
    });
});