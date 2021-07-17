import React from "react";
import axios from "axios";
// import { getMetricsByPageName } from "../tools/crudJson";

class GraphSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metricList: [],
    };
  }
  componentDidMount() {
    this.renderData("https://www.google.com");
  }
  renderData = async (formValues) => {
    console.log("state updated");
    // const resp = await getMetricsByPageName("https://www.google.com");
    const metrics = await axios
      .get(`/metrics?url=${formValues}`)
      .then((Response) => Response.data)
      .catch((err) => console.log(err));

    this.setState = {
      metricList: metrics,
    };
  };

  render() {
    console.log(this.state.metricList);
    const dataPoint = this.state.metricList?.map(({ id, url, blogCreator }) => {
      return (
        <div key={id}>
          <p>{id}</p>
          <p>{url}</p>
          <p>{blogCreator}</p>
        </div>
      );
    });
    return <div>{dataPoint}</div>;
  }
}
export default GraphSection;
