// ChartLine.jsx

// React
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// ChartJS
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

// Registre Chart
Chart.register(CategoryScale);

// Return
const ChartLine = ( { chartData, chartOptions, chartTitle, chartLegend } ) => {

    // Data Chart
    const [dataChart] = useState(chartData);
    
    // Options  Chart
    const [optionsChart] = useState(chartOptions);

    return (
        <>
            <div className="c-chart-section">
                <div className="c-chart-container">
                    <h4 className="c-chart-title" dangerouslySetInnerHTML={ { __html: chartTitle } } />
                    <div className="c-chart-content">
                        <Line data={dataChart} options={optionsChart} />
                    </div>
                </div>
                <p  className="c-chart-lengend" dangerouslySetInnerHTML={ { __html: chartLegend } } />
            </div>
        </>
    );
};


// Proptypes
ChartLine.propTypes = {
    chartData: PropTypes.object.isRequired,
    chartOptions: PropTypes.object.isRequired,
    chartTitle: PropTypes.string.isRequired,
    chartLegend: PropTypes.string.isRequired,
};

// Export
export default ChartLine;
