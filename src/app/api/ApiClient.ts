import axios from "axios";
import {PrefecturesResponse,PopulationsResponse} from "../types/index"
import {ApiUrl} from "../../constants/ApiUrl";

const getCache = (key: string) => {
  const cache = sessionStorage.getItem(key);
  return cache ? JSON.parse(cache): undefined;
}

const setCache = (key: string,data: any) => {
  sessionStorage.setItem(key,JSON.stringify(data));
}

const isPopulationRequest = (url:string | undefined):boolean => {
  if(!url)return false;
  return url === `${ApiUrl.ENDPOINT}/${ApiUrl.POPULATIONYEAR}` ? true: false;
}

axios.interceptors.request.use((config) => {
  if(!isPopulationRequest(config.url)){
    return config;
  }
  const key = JSON.stringify(config.params);
  const data = getCache(key);
  if(data){
    console.log("cacheあり");
    config.adapter = () =>{
      return new Promise((resolve,reject) => {
        const res = {
          data: data,
          status: 200,
          statusText: "OK",
          config,
          headers: {},
        };
        return resolve(res);
      })
    }
  }
  return config;
})

axios.interceptors.response.use((config) => {
  if(!isPopulationRequest(config.config.url)){
    return config;
  }
  const key = JSON.stringify(config.config.params);
  setCache(key,config.data);
  return config;
})

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
  public async getPopulations(prefCode: number): Promise<PopulationsResponse> {
    try{
      const res = await axios.get(`${ApiUrl.ENDPOINT}/${ApiUrl.POPULATIONYEAR}`,{
        headers: { "x-api-key": this.apiKey },
        params: {prefCode: String(prefCode),cityCode: "-"}
      });
      if(res.status === 200){
        if("statusCode" in res.data){
          throw new Error(`Api Resoinse Error status: ${res.data.statusCode}`);
        }
        return res.data;
      }
      else{
        throw new Error(`Api Response Error status: ${res.status}`);
      }
    }
    catch(error){
      console.error(error);
      throw error;
    }
  }
}
