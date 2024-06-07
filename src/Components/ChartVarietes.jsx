// ChartVarietes.jsx

// React
import { useState } from "react";
import PropTypes from "prop-types";

// ChartJS
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

// Registre Chart
Chart.register(CategoryScale);

// Return
const ChartVarietes = ({ chartData, chartTitle, chartLegend }) => {
    const [dataChart] = useState({
        labels: chartData.tableBody.map((data) => data.id + ". " + data.variedad),
        datasets: [
            {
                label: "Promedio de días de corte",
                data: chartData.tableBody.map((data) => data.corte),
                backgroundColor: "#BDCAAB",
                borderColor: "#BDCAAB",
            },
            {
                label: "Días de corte estimado por el banco",
                data: chartData.tableBody.map((data) => data.banco),
                backgroundColor: "#747567",
                borderColor: "#747567",
            },
        ],
    });

    // Options  Chart
    const [optionsChart] = useState({
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            bar: {
                borderWidth: 0,
                barThickness: 5,
            },
        },
        plugins: {
            legend: {
                position: "bottom",
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 14,
                    },
                },
            },
            y: {
                border: {
                    display: true,
                },
                grid: {
                    display: true,
                    color: "rgba(0,0,0,0.25)",
                    lineWidth: 1,
                },
                ticks: {
                    font: {
                        size: 12,
                        weight: "400",
                    },
                },
            },
        },
    });

    // Calc Height
    const numberOfLabels = chartData.tableBody.length;
    const chartHeight = numberOfLabels * 35;

    return (
        <>
            <div className="c-chart-section">
                <div className="c-chart-container">
                    <h4 className="c-chart-title" dangerouslySetInnerHTML={{ __html: chartTitle }} />
                    <div
                        className="c-chart-content"
                        style={{
                            height: `${chartHeight}px`,
                            width: "100%",
                        }}>
                        <Bar data={dataChart} options={optionsChart} />
                    </div>
                </div>
                <p className="c-chart-lengend" dangerouslySetInnerHTML={{ __html: chartLegend }} />
            </div>
        </>
    );
};

// PropTypes
ChartVarietes.propTypes = {
    chartData: PropTypes.object.isRequired,
    chartTitle: PropTypes.string.isRequired,
    chartLegend: PropTypes.string.isRequired,
};

// Export
export default ChartVarietes;
