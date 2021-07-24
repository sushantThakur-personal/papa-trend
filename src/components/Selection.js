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


  render() {

    // console.log(this.state.startDate);
    // console.log(this.state.endDate);
    return <div>
      <h1 className="title">Core Web Vital Trends</h1>
      <div >
        <DateSelection startDate={this.getStartDate} endDate={this.getEndDate}></DateSelection>

      </div>

    </div>;
  }
}

export default Selection;
