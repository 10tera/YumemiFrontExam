import nock from "nock";
import {ApiUrl} from "../src/constants/ApiUrl";

export const init = () => {
    nock(ApiUrl.ENDPOINT,{
        
    }).get(`/${ApiUrl.PREFECTURES}`).reply(function(uri,requestBody){
        if(this.req.headers["x-api-key"] === "validKey"){
            return [200,{data: {message: null}}];
        }
        else{
            return [200,{data: {statusCode: 403}}];
        }
    });
};