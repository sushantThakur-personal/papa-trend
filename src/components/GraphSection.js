import React from "react";
import { getMetricsByPageName } from "../tools/crudJson";

class GraphSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metricList: [],
    };
  }
  componentDidMount() {
    this.renderData();
  }
  renderData = async () => {
    console.log("state updated");
    const resp = await getMetricsByPageName("https://www.google.com");

    this.setState = {
      metricList: resp,
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
