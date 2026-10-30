import { BACKEND_BASE_URL } from "@/constants";
import { ListResponse } from "@/types";
import { createDataProvider, CreateDataProviderOptions } from "@refinedev/rest";

const options: CreateDataProviderOptions = {
  getList: {
    getEndpoint: ({ resource }) => resource,

    buildQueryParams: async ({ filters, pagination }) => {
      const searchFilter = (filters ?? []).find(
        (f) => "field" in f && f.field === "name" && f.operator === "contains",
      );
      const departmentFilter = (filters ?? []).find(
        (f) => "field" in f && f.field === "department",
      );

      const page = pagination?.currentPage ?? 1;
      const limit = pagination?.pageSize ?? 10;

      return {
        ...(searchFilter ? { search: String(searchFilter.value) } : {}),
        ...(departmentFilter ? { department: String(departmentFilter.value) } : {}),
        page,
        limit,
      };
    },

    mapResponse: async (response) => {
      const payLoad: ListResponse = await response.json();

      return payLoad.data ?? [];
    },

    getTotalCount: async (response) => {
      const payload: ListResponse = await response.json();

      return payload.pagination?.total ?? payload.data?.length ?? 0;
    },
  },
};

const { dataProvider } = createDataProvider(BACKEND_BASE_URL, options);

export { dataProvider };
