import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "../../test-utils";
import {InputText} from "../../../src/app/components/atoms/InputText";

describe("InputText.tsx",() => {
    const handleTextChange = jest.fn();
    const label = "testLabel";
    const value = "testvalue";
    beforeEach(() => {
        handleTextChange.mockClear();
    });
    it("ラベル/初期値の表示確認",async () => {
        render(<InputText label={label} value={value} handleTextChange={handleTextChange}/>);
        expect(screen.getByPlaceholderText(label)).toBeInTheDocument();
        expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    });
    it("値変更時のコールバック関数のテスト",async () => {
        const newValue = "newTestValue";
        render(<InputText label={label} value={value} handleTextChange={handleTextChange} />);
        const input = screen.getByRole("textbox");
        fireEvent.change(input,{target: {value: newValue}});
        expect(handleTextChange).toHaveBeenCalledWith(newValue);
    })
});