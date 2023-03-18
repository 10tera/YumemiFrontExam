import "@testing-library/jest-dom";
import { render, screen } from "../test-utils";
import {ErrorText} from "../../src/app/components/atoms/ErrorText";

describe("ErrorText.tsx",() => {
    it("When isError True",async() => {
        render(<ErrorText isError={true} errorMessage={"testErrorMessage"}/>);
        const errorText = screen.getByText("testErrorMessage");
        expect(errorText).toBeInTheDocument();
    });
    it("When isError false",async() => {
        render(<ErrorText isError={false} errorMessage={"testErrorMessage"}/>);
        expect(screen.queryByText("testErrorMessage")).not.toBeInTheDocument();
    })
});