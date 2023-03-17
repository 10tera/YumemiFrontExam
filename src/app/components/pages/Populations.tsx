import React from "react";
import { Title } from "../atoms/Title";
import { PrefSelect } from "../organisms/PrefSelect";
import { SecondTitle } from "../atoms/SecondTitle";
import { Graph } from "../organisms/Graph";

import { usePrefSelect } from "../../logic/usePrefSelect";
import { usePrefPopulation } from "../../logic/usePrefPopulation";

export const Populations = () => {
  const { isCheckList, handlePrefecturesCheckBox } = usePrefSelect();
  const { populations } = usePrefPopulation({ isCheckList: isCheckList });

  return (
    <React.Fragment>
      <section>
        <Title>都道府県別人口構成</Title>
      </section>
      <section>
        <SecondTitle>都道府県選択</SecondTitle>
        <PrefSelect isCheckList={isCheckList} handlePrefecturesCheckBoxChange={handlePrefecturesCheckBox} />
      </section>
      <section>
        <SecondTitle>人口構成グラフ</SecondTitle>
        <Graph populations={populations} />
      </section>
    </React.Fragment>
  );
};
