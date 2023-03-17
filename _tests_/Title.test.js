import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Title } from "../src/app/components/atoms/Title";



describe("Title",() => {
    it("タイトルの表示確認",async () => {
        render(<Title>test</Title>);
        const title = screen.getByText("test");
        expect(title).toBeInTheDocument();
    })
})