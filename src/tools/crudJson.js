import jsonDbApi from "../api/jsonDbApi";

export const getMetricsByPageName = async (formValues) => {
  const response = await (
    await jsonDbApi.get(`/metrics?url=${formValues}`)
  ).data;
  return response;
};
