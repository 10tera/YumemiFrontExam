import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "../test-utils";
import { CheckBox } from "../../src/app/components/atoms/CheckBox";

describe("CheckBox.tsx",() => {
    const setIsCheck = jest.fn();
    const label = "testLabel";
    const prefCode = 1;
    const isCheck = true;
    beforeEach(() => {
        setIsCheck.mockClear();
    });
    it("ラベルの表示確認",async () => {
        render(<CheckBox prefName={label} prefCode={prefCode} isCheck={isCheck} setIsCheck={setIsCheck}/>);
        expect(screen.getByText(label)).toBeInTheDocument();
    });
    
    it("チェックボックスの動作確認",async () => {
        render(<CheckBox prefName={label} prefCode={prefCode} isCheck={isCheck} setIsCheck={setIsCheck} />);
        const checkBox = screen.getByRole("checkbox");
        fireEvent.click(checkBox);
        expect(setIsCheck).toHaveBeenCalledTimes(1);
        expect(setIsCheck).toHaveBeenCalledWith(false,prefCode);
        fireEvent.click(checkBox);
        expect(setIsCheck).toHaveBeenCalledTimes(2);
        expect(setIsCheck).toHaveBeenCalledWith(true, prefCode);
    });
    
});