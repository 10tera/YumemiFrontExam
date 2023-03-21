import "@testing-library/jest-dom";
import {render,screen} from "../../test-utils";
import { Title } from "../../../src/app/components/atoms/Title";



describe("Title.tsx",() => {
    it("タイトルの表示確認",async () => {
        render(<Title>testTitle</Title>);
        expect(screen.getByText("testTitle")).toBeInTheDocument();
    })
})