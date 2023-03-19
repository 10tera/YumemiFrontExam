import "@testing-library/jest-dom";
import nock from "nock";
import { render, screen, fireEvent, waitFor } from "../../test-utils";
import {init} from "../../nockApi";
import {InputApiKey} from "../../../src/app/components/organisms/InputApiKey";



describe("InputApiKey.tsx",() => {
    let resData;
    beforeEach(() => {
        resData = {
            data: {
                statusCode: 403
            }
        }
    });
    afterEach(() => {
        nock.cleanAll();
        jest.clearAllMocks();
    });
    init();
    //nock("https://opendata.resas-portal.go.jp").get("/api/v1/prefectures").reply(403, resData);
    it("何も入力せずにボタンを押した場合",async () => {
        render(<InputApiKey/>);
        const input = screen.getByRole("textbox");
        const startButton = screen.getByRole("button");
        fireEvent.change(input,{target: {value: ""}});
        fireEvent.click(startButton);
        expect(screen.getByText("APIキーを入力してください")).toBeInTheDocument();
    });
    
    it("正しくないAPIキーを入力した場合",async () => {
        render(<InputApiKey />);
        const input = screen.getByRole("textbox");
        const startButton = screen.getByRole("button");
        fireEvent.change(input, { target: { value: "notKey" } });
        fireEvent.click(startButton);
        await waitFor(() => {screen.debug(); expect(screen.getByText("入力されたAPIキーは無効です")).toBeInTheDocument();},{timeout: 5000});
    });
    
    it("正しいAPIキーを入力した場合",async () => {
        render(<InputApiKey />);
        const input = screen.getByRole("textbox");
        const startButton = screen.getByRole("button");
        fireEvent.change(input, { target: { value: "validKey" } });
        fireEvent.click(startButton);
        await waitFor(() => expect(screen.queryByText("入力されたAPIキーは無効です")).not.toBeInTheDocument(), { timeout: 5000 });
    })
    
});