export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefecturesResponse = {
  message: null;
  result: Prefecture[];
};

export type YearPopulation = {
  year: number;
  value: number;
  rate?: number;
};

export type PopulationsResponse = {
  message: null;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: YearPopulation[];
    }[];
  };
};

export type PopulationQueryResponse = {
  prefCode: number;
  data: PopulationsResponse;
};

export type PrefectureSelect = {
  isCheck: boolean;
  prefCode: number;
  prefName: string;
};
