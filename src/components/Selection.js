import React from "react";
import DateSelection from "./DateSelector";

class Selection extends React.Component {
  render() {
    return <div>
      <h1 className="title">Core Web Vital Trends</h1>
      <div id="date_selector">
        <DateSelection ></DateSelection>
        <DateSelection ></DateSelection>
      </div>

    </div>;
  }
}

export default Selection;
