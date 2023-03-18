import "@testing-library/jest-dom";
import { render, screen,fireEvent} from "../test-utils";
import userEvent from "@testing-library/user-event";
import {Button} from "../../src/app/components/atoms/Button";


describe("Button.tsx",() => {
    it("ボタンの表示確認",async () => {
        render(<Button name={"testButton"} onClick={() => {}}/>);
        expect(screen.getByText("testButton")).toBeInTheDocument();
    });
    it("ボタンのクリック関数の確認",async () => {
        const handleClick = jest.fn();
        render(<Button name={"click"} onClick={handleClick}/>)
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
});