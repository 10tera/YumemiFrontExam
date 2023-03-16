import axios from "axios";
import {PrefecturesResponse,PopulationsResponse} from "../types/index"
import {ApiUrl} from "../../constants/ApiUrl";

export class ApiClient {
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  //都道府県一覧取得
  public async getPrefectures(): Promise<PrefecturesResponse> {
    try{
      const res = await axios.get(`${ApiUrl.ENDPOINT}/${ApiUrl.PREFECTURES}`, {
        headers: { "x-api-key": this.apiKey }
      });
      if (res.status === 200) {
        if("statusCode" in res.data){
          throw new Error(`Api Resoinse Error status: ${res.data.statusCode}`);
        }
        return res.data;
      }
      else {
        throw new Error(`Api Response Error status: ${res.status}`);
      }
    }
    catch(error){
      console.error(error);
      throw error;
    }
  }
  //人口構成取得
  public async getPopulations() {

  }
}
