import React from "react";
import { getMetricsByPageName } from "../tools/crudJson";

class GraphSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metricList: [],
    };
  }
  async componentDidMount() {
    this.setState({
      metricList: await getMetricsByPageName("https://www.google.com"),
    });
  }

  render() {
    const dataPoint = this.state.metricList?.map((entry) => {
      return (
        <div key={entry.id}>
          <p>{entry.id}</p>
          <p>{entry.url}</p>
          <p>{entry.blogCreator}</p>
        </div>
      );
    });
    return <div>{dataPoint}</div>;
  }
}
export default GraphSection;
