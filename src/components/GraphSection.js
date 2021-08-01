import React from "react";
import getMetricsByPageName from "../tools/crudJson";
import Selection from "./Selection";

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

  dataPoint = () =>
    this.state.metricList?.map((entry) => {
      return (
        <div key={entry.id}>
          <p>{entry.id}</p>
          <p>{entry.url}</p>
          <p>{entry.blogCreator}</p>
        </div>
      );
    });

  getDateRange = (value) => {
    let resultResponse = this.state.metricList.filter((obj) => {
      return obj.auditDate >= value.startDate && obj.auditDate <= value.endDate;
    });
    console.log(resultResponse);
  };

  render() {
    return (
      <div className="selection_area">
        <Selection dateRange={this.getDateRange} />
        {/* {this.dataPoint} */}
      </div>
    );
  }
}
export default GraphSection;
