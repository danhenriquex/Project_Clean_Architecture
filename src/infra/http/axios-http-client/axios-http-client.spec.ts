import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";
import * as faker from "@faker-js/faker";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

describe("AxiosHttpClient", () => {
  it("Should call axios with correct URL", async () => {
    const url = faker.faker.internet.url();
    const sut = new AxiosHttpClient();
    sut.post({ url });
    expect(mockedAxios).toHaveBeenCalledWith(url);
  });
});
