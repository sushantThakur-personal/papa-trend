import jsonDbApi from "../api/jsonDbApi";


//List of Unique pageName


//Details by PageName/URL
export const getMetricsByPageName = async (formValues) => {
  const response = await (
    await jsonDbApi.get(`/metrics?url=${formValues}`)
  ).data;
  return response;
};


//Details in Selected Range and URL

//Add captured Data




