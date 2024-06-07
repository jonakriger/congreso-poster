// Chartbloom.jsx

// React
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

// Chart
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, Title } from "chart.js";
import { BoxPlotChart, BoxPlotController, BoxAndWiskers } from "@sgratzl/chartjs-chart-boxplot";
import { Chart } from "react-chartjs-2";

// Registrar Chart
ChartJS.register(CategoryScale, LinearScale, Tooltip, Title, BoxPlotChart, BoxPlotController, BoxAndWiskers);

// Return
const Chartbloom = ({ chartData, chartTitle, chartLegend }) => {
    const [dataChart] = useState({
        labels: chartData.map((data) => data.label),
        datasets: [
            {
                label: chartData.map((data) => data.label),
                backgroundColor: "#D9DBCA",
                hoverBackgroundColor: "#D9DBCA",
                borderColor: "#336535",
                borderWidth: 3,
                hitPadding: 0,
                outlierBackgroundColor: "#ffffff",
                outlierBorderColor: "#336535",
                outlierBorderWidth: 3,
                outlierHitRadius: 5,
                outlierRadius: 5,
                outlierStyle: "circle",
                data: chartData.map((data) => data.data),
            },
        ],
    });

    const [optionsChart] = useState({
        indexAxis: "y",
        scales: {
            x: {
                min: 30,
                max: 90,
                display: true,
                grid: {
                    display: true,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title: function () {
                        return '';
                    },
                    label: function () {
                        return '';
                    },
                    footer: function (TooltipItems) {
                        let newFooter = "";
                        TooltipItems.forEach((TooltipItem) => {
                            if (TooltipItem.formattedValue.hoveredOutlierIndex == -1) {
                                newFooter += "Minimo: " + TooltipItem.formattedValue.min + ", ";
                                newFooter += "Q1: " + TooltipItem.formattedValue.q1 + ", ";
                                newFooter += "Medio: " + TooltipItem.formattedValue.median + ", ";
                                newFooter += "Q3: " + TooltipItem.formattedValue.q3 + ", ";
                                newFooter += "Maxima: " + TooltipItem.formattedValue.max + ".";
                            } else {
                                newFooter += TooltipItem.formattedValue.outliers[TooltipItem.formattedValue.hoveredOutlierIndex];
                            }
                        });
                        return newFooter;
                    },
                },
            },
        },
    });

    return (
        <>
            <div className="c-chart-section">
                <div className="c-chart-container">
                    <h4 className="c-chart-title" dangerouslySetInnerHTML={ { __html: chartTitle } } />
                    <div className="c-chart-content">
                        <Chart type="boxplot" data={dataChart} options={optionsChart} />
                    </div>
                </div>
                <p  className="c-chart-lengend" dangerouslySetInnerHTML={ { __html: chartLegend } } />
            </div>
        </>
    );
};

// PropTypes
Chartbloom.propTypes = {
    chartData: PropTypes.any.isRequired,
    chartTitle: PropTypes.string.isRequired,
    chartLegend: PropTypes.string.isRequired,
};

// Export
export default Chartbloom;
