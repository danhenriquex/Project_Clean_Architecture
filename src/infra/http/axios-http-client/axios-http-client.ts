import { HttpPostClient, HttpResponse } from "@/data/protocols/http";
import { HttpPostParams } from "@/data/protocols/http/http-post-client";
import axios from "axios";

export class AxiosHttpClient implements HttpPostClient<any, any> {
  public async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body);

    console.log(httpResponse)

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
