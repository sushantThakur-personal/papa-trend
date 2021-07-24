import jsonDbApi from "../api/jsonDbApi";


//List of Unique URL
// export const getMetricsByPageUrl = async (formValues) => {
//   const response = await (
//     await jsonDbApi.get(`/metrics?pageUrl=${formValues}`)
//   ).data;
//   return response;
// };

//Details by PageName/URL
const getMetricsByPageName = async (formValues) => {
  const response = await (
    await jsonDbApi.get(`/metrics?url=${formValues}`)
  ).data;
  return response;
};


//Details in Selected Range and URL

//Add captured Data

export default getMetricsByPageName;




