import React from 'react';
import '../App.css'

class DateSelection extends React.Component {

    handleStartDate = (event) => {
        this.props.startDate(event.target.value);
    }

    handleEndDate = (event) => {
        this.props.endDate(event.target.value);
    }

    render() {
        return (
            <div id="date_selector">
                <div className="date-selector">
                    <input type="date" onChange={this.handleStartDate}></input>
                </div>
                <div className="date-selector">
                    <input type="date" onChange={this.handleEndDate}></input>
                </div>
            </div>
        );
    }
}


export default DateSelection;