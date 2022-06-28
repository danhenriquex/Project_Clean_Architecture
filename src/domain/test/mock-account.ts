import { faker } from "@faker-js/faker";
import { AccountModel } from "../models/account-model";
import { AuthenticationParams } from "../usecases/authentication";
import * as uuid from "uuid";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: uuid.v4(),
});
