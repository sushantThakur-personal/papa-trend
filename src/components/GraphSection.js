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
    let resp = await getMetricsByPageName("https://www.google.com");
    this.setState = {
      metricList: resp,
    };
  }
  mapResponse = () => {
    return this.state.metricList.map(({ id, url, blogCreator }) => {
      return (
        <div key={id}>
          <div>{id}</div>
          <div>{url}</div>
          <div>{blogCreator}</div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.mapResponse()}</div>;
  }
}
export default GraphSection;
