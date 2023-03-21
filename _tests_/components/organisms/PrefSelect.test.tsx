import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "../../test-utils";
import {PrefSelect} from "../../../src/app/components/organisms/PrefSelect";

describe("PrefSelect.tsx",() => {
    const isCheckList = [
        {isCheck: false,prefCode:1,prefName:"name1"},
        {isCheck: true,prefCode:2,prefName:"name2"},
        {isCheck: false,prefCode:3,prefName:"name3"},
    ];
    const handlePrefecturesCheckBoxChange = jest.fn();
    beforeEach(() => {
        handlePrefecturesCheckBoxChange.mockClear();
    });
    it("チェックボックスの表示確認",async () => {
        render(<PrefSelect isCheckList={isCheckList} handlePrefecturesCheckBoxChange={handlePrefecturesCheckBoxChange}/>);
        for(const pref of isCheckList){
            expect(screen.getByText(pref.prefName)).toBeInTheDocument();
        }
    });
    it("クリック時のコールバック関数の確認",async () => {
        render(<PrefSelect isCheckList={isCheckList} handlePrefecturesCheckBoxChange={handlePrefecturesCheckBoxChange} />);
        for(const pref of isCheckList){
            fireEvent.click(screen.getByText(pref.prefName));
            expect(handlePrefecturesCheckBoxChange).toHaveBeenCalledWith(!pref.isCheck,pref.prefCode);
        }
    });
});