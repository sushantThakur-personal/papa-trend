import React from "react";
import DateSelection from "./DateSelector";


class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: ""
    }
  }


  getStartDate = (value) => {
    this.setState({
      startDate: value
    })
  }

  getEndDate = (value) => {
    this.setState({
      endDate: value
    })
  }

  sendDateRange = () => {
    this.props.dateRange(this.state);
  }


  render() {
    return <div class="selection_sub">
      {/* <h1 className="title">Core Web Vital Trends</h1> */}

      <DateSelection startDate={this.getStartDate} endDate={this.getEndDate}></DateSelection>
      <button id="submit-button" onClick={this.sendDateRange}>FILTER</button>

    </div>;
  }
}

export default Selection;
