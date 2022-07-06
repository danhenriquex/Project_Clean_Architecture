import axios from "axios";
import * as faker from "@faker-js/faker";

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  const mockedAxiosResult = {
    data: { name: "danilo" },
    status: 300,
  };

  mockedAxios.post.mockResolvedValue(mockedAxiosResult);

  return mockedAxios;
};
