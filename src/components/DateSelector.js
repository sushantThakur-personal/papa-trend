import React from 'react';

class DateSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        // const dataPoint = this.state.metricList?.map((entry) => {
        return (
            <div className="date-selector">
                <input type="date"></input>
            </div>
        );
        // });
        // return <div>{dataPoint}</div>;
    }
}


export default DateSelection;