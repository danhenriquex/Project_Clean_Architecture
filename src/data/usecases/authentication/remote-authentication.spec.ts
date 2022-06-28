import { HttpPostClientSpy } from "@/data/test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";
import { mockAuthentication } from "@/domain/test/mock-authentication";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import * as faker from "@faker-js/faker";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = faker.faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe("Remote Authentication", () => {
  test("should call HttpPostClient with correct URL", async () => {
    const url = faker.faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });

  test("Should call HttpPostClient with correct body", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authenticationParams = mockAuthentication();
    await sut.auth(authenticationParams);
    expect(httpPostClientSpy.body).toEqual(authenticationParams);
  });

  test("Should thrown InvalidCredentialsError if HttpPostClient returns 401", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });
});
