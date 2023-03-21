import "@testing-library/jest-dom";
import {renderHook,act} from "@testing-library/react";
import { useGraph } from "../../src/app/logic/useGraph";
import { PopulationQueryResponse } from "../../src/app/types";

describe("useGraph.ts",() => {
    const populations: PopulationQueryResponse[] = [
        {
            prefCode: 1,
            data: {
                message: null,
                result: { boundaryYear: 1000, data: [] }
            },
        },
        {
            prefCode: 2,
            data: {
                message: null,
                result: { boundaryYear: 1000, data: [] }
            }
        },
        {
            prefCode: 3,
            data: {
                message: null,
                result: { boundaryYear: 1000, data: [] }
            }
        }
    ];
    it("モード選択についてのテスト",() => {
        const {result} = renderHook(() => useGraph({populations:populations}));
        act(() => {
            result.current.handleDataModeSelectChange("総人口");
        });
        expect(result.current.highchartsOptions.title?.text).toBe("総人口");
        act(() => {
            result.current.handleDataModeSelectChange("生産年齢人口");
        });
        expect(result.current.highchartsOptions.title?.text).toBe("生産年齢人口");
    });
    it("表示データ数の確認",() => {
        const { result } = renderHook(() => useGraph({ populations: populations }));
        expect(result.current.series.length).toBe(3);
    });
});