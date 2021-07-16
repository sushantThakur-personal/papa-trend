import jsonDbApi from "../api/jsonDbApi";

export const getMetricsByPageName = async (formValues) => {
  const response = await jsonDbApi.get(`/metrics?url=${formValues}`);
  return await response.data;
};
// { ...response, [response.data.id]: response.data }
