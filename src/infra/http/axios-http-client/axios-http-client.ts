import { HttpPostParams } from "@/data/protocols/http/http-post-client";
import axios from "axios";

export class AxiosHttpClient {
  public async post(params: HttpPostParams<any>): Promise<void> {
    await axios(params.url);
  }
}
