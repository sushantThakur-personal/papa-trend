import jsonDbApi from "../api/jsonDbApi";



const getMetricsByPageName = async (formValues) => {
  const response = await (
    await jsonDbApi.get(`/metrics?url=${formValues}`)
  ).data;
  return response;
};




export default getMetricsByPageName;




