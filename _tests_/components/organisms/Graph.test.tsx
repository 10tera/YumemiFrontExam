import "@testing-library/jest-dom";
import { render, screen } from "../../test-utils";
import { Graph } from "../../../src/app/components/organisms/Graph";
import { PopulationQueryResponse } from "../../../src/app/types/index";

describe("Graph.tsx", () => {
  const populations: PopulationQueryResponse[] = [
    {
      prefCode: 1,
      data: {
        message: null,
        result: { boundaryYear: 1000, data: [] },
      },
    },
    {
      prefCode: 2,
      data: {
        message: null,
        result: { boundaryYear: 1000, data: [] },
      },
    },
    {
      prefCode: 3,
      data: {
        message: null,
        result: { boundaryYear: 1000, data: [] },
      },
    },
  ];
  it("ラベル表示確認", async () => {
    render(<Graph populations={populations} />);
    expect(screen.getByText("人口")).toBeInTheDocument();
    expect(screen.getByText("年")).toBeInTheDocument();
  });
});
