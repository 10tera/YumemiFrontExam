import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "../../test-utils";
import {TextField} from "../../../src/app/components/molecules/TextField";
import exp from "constants";
import { debug } from "console";

describe("TextField.tsx",() => {
    const label = "testLabel";
    const value = "testValue";
    const errorMessage = "testErrorMessage";
    const handleTextChange = jest.fn();
    beforeEach(() => {
        handleTextChange.mockClear();
    });
    it("ラベルと初期値の表示確認",async () => {
        render(<TextField label={label} value={value} errorMessage={errorMessage} isError={false} handleTextChange={handleTextChange}/>);
        expect(screen.getByPlaceholderText(label)).toBeInTheDocument();
        expect(screen.getByDisplayValue(value)).toBeInTheDocument();
        expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
    });
    it("値変更時のコールバック関数のテスト",async () => {
        render(<TextField label={label} value={value} errorMessage={errorMessage} isError={false} handleTextChange={handleTextChange} />);
        const newValue = "newValue";
        const input = screen.getByRole("textbox");
        fireEvent.change(input,{target: {value: newValue}});
        expect(handleTextChange).toHaveBeenCalledWith(newValue);
    });
    it("エラーメッセージの表示確認",async () => {
        render(<TextField label={label} value={value} errorMessage={errorMessage} isError={true} handleTextChange={handleTextChange} />);
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
    })
});