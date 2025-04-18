import React from 'react';
import './NumberDisplay.css';

const NumberDisplay = ({ data }) => {
  if (!data) return <div className="no-data">No data available</div>;

  return (
    <div className="number-display">
      <div className="data-section">
        <h3>Previous Window State</h3>
        <p>{JSON.stringify(data.windowPrevState)}</p>
      </div>
      <div className="data-section">
        <h3>Current Window State</h3>
        <p>{JSON.stringify(data.windowCurrState)}</p>
      </div>
      <div className="data-section">
        <h3>Numbers Received</h3>
        <p>{JSON.stringify(data.numbers)}</p>
      </div>
      <div className="data-section">
        <h3>Average</h3>
        <p>{data.avg.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default NumberDisplay;