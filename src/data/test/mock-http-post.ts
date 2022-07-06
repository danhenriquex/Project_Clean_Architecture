import * as faker from "@faker-js/faker";
import { HttpPostParams } from "../protocols/http";

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.faker.internet.url(),
  body: { name: faker.faker.name },
});
