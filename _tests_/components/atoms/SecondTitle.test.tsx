import "@testing-library/jest-dom";
import { render, screen } from "../../test-utils";
import { SecondTitle } from "../../../src/app/components/atoms/SecondTitle";

describe("SecondTitle.tsx",() => {
    it("サブタイトルの表示確認",async () => {
        render(<SecondTitle>testSecondTitle</SecondTitle>);
        expect(screen.getByText("testSecondTitle")).toBeInTheDocument();
    })
})