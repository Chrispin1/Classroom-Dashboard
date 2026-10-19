import { MOCK_SUBJECTS } from "@/constants/mock-subjects";
import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    //to be filled with actual data
    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },

  getOne: async () => {
    throw new Error("This function is not present in mock data");
  },
  create: async () => {
    throw new Error("This function is not present in mock data");
  },
  update: async () => {
    throw new Error("This function is not present in mock data");
  },
  deleteOne: async () => {
    throw new Error("This function is not present in mock data");
  },

  getApiUrl: () => "",
};
