import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "../../test-utils";
import {Graph} from "../../../src/app/components/organisms/Graph";

describe("Graph.tsx",() => {
    //不正構造が混入しているデータ
    const populations = [
        {
            prefCode: 1,
            data: {
                message: null,
            },
        },
        {
            prefCode: 2,
            data: {
                message: null,
                data :{}
            }
        },
        {
            data: {
                data: {}
            }
        }
    ];
    it("ラベル表示確認(不正データ入力時のエラー回避確認も)",async () => {
        render(<Graph populations={populations}/>);
        expect(screen.getByText("人口")).toBeInTheDocument();
        expect(screen.getByText("年")).toBeInTheDocument();
    })
});