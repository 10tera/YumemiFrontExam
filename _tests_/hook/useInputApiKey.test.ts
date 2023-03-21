import "@testing-library/jest-dom";
import nock from "nock";
import {BrowserRouter} from "react-router-dom";
import { renderHook, act,waitFor } from "@testing-library/react";
import { useInputApiKey } from "../../src/app/logic/useInputApiKey";
import { init } from "../nockApi";

describe("useInputApiKet.ts",() => {
    beforeEach(() => {
        nock.cleanAll();
        jest.clearAllMocks();
    });
    afterEach(() => {
        nock.cleanAll();
        jest.clearAllMocks();
    });
    init();
    it("不正なAPIキー入力時",async() => {
        const {result} = renderHook(() => useInputApiKey(),{wrapper:BrowserRouter});
        act(() => {
            result.current.handleTextFieldChange("notKey");
            setTimeout(() => {
                result.current.handleStartButtonClick();
                waitFor(() => {
                    expect(result.current.state.isError).toBe(true);
                    expect(result.current.state.errorMessage).toBe("入力されたAPIキーは無効です");
                }, { timeout: 5000 });
            },1000);
        });
        
    });
});