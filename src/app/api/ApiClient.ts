import axios from "axios";
import {PrefecturesResponse,PopulationsResponse} from "../types/index"
import {ApiUrl} from "../../constants/ApiUrl";

class ApiClient {
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  //都道府県一覧取得
  public getPrefectures() {
    
  }
  //人口構成取得
  public getPopulations() {

  }
}
