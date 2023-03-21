import "@testing-library/jest-dom";
import { render, screen,fireEvent } from "../../test-utils";
import {DataModeSelect} from "../../../src/app/components/molecules/DataModeSelect";

describe("DataModeSelect.tsx",() => {
    const setSelectedMode = jest.fn();
    const modes = ["年少人口","生産年齢人口","老年人口","総人口"];
    it("モード切替時のコールバック関数の動作確認",async () => {
        render(<DataModeSelect setSelectedMode={setSelectedMode}/>)
        modes.forEach((mode) => {
            fireEvent.change(screen.getByRole("combobox"), { target: { value: mode } });
            expect(setSelectedMode).toHaveBeenCalledWith(mode);
        });
    })
});