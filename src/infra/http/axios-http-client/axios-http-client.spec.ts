import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";
import * as faker from "@faker-js/faker";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

describe("AxiosHttpClient", () => {
  it("Should call axios with correct URL and verb", async () => {
    const url = faker.faker.internet.url();
    const sut = makeSut();
    await sut.post({ url });
    expect(mockedAxios.post).toHaveBeenCalledWith(url);
  });

  // it("Should call axios with correct body", async () => {
  //   const url = faker.faker.internet.url();
  //   const sut = makeSut();
  //   sut.post({ url });
  //   expect(mockedAxios.post).toHaveBeenCalledWith(url);
  // });
});
