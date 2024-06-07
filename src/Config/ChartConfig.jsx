// ChartConfig.jsx

import { Chart, registerables } from "chart.js";

// Registra todos los componentes de Chart.js
Chart.register(...registerables);

// Definir opciones globales
Chart.defaults.backgroundColor = "rgba(255, 255, 255, 0)";
Chart.defaults.color = "#000000";
Chart.defaults.font.size = 14;
Chart.defaults.font.family = "Roboto";
Chart.defaults.font.weight = "400";

// Chart Title
Chart.defaults.plugins.title.display = false;

// Chart Legend
Chart.defaults.plugins.legend.display = true;
Chart.defaults.plugins.legend.position = "bottom";
Chart.defaults.plugins.legend.align = "center";
Chart.defaults.plugins.legend.labels.usePointStyle = true;

// Configuración global de los ejes
Chart.defaults.scale.border.display = false;
Chart.defaults.scale.border.color = "#BDCAAB";
Chart.defaults.scale.border.lineWidth = 1;
Chart.defaults.scale.grid.display = false;
Chart.defaults.scale.grid.color = "#BDCAAB";
Chart.defaults.scale.grid.lineWidth = 1;

// Confi Interactions
Chart.defaults.interaction.intersect = false;
Chart.defaults.interaction.mode = "point";
Chart.defaults.interaction.axis = "xy";

// Chart Tooltip
Chart.defaults.plugins.tooltip.position = "nearest";
Chart.defaults.plugins.tooltip.backgroundColor = "rgba(0, 0, 0, 0.8)";
Chart.defaults.plugins.tooltip.titleColor = "#ffffff";
Chart.defaults.plugins.tooltip.titleFont.family = "roboto";
Chart.defaults.plugins.tooltip.titleFont.size = 12;
Chart.defaults.plugins.tooltip.titleFont.weight = "300";
Chart.defaults.plugins.tooltip.titleAlign = "center";
Chart.defaults.plugins.tooltip.titleSpacing = 3;
Chart.defaults.plugins.tooltip.titleMarginBottom = 0;
Chart.defaults.plugins.tooltip.bodyColor = "#ffffff";
Chart.defaults.plugins.tooltip.bodyFont.family = "roboto";
Chart.defaults.plugins.tooltip.bodyFont.size = 16;
Chart.defaults.plugins.tooltip.bodyFont.weight = "400";
Chart.defaults.plugins.tooltip.bodyAlign = "center";
Chart.defaults.plugins.tooltip.bodySpacing = 3;
Chart.defaults.plugins.tooltip.footerColor = "#ffffff";
Chart.defaults.plugins.tooltip.footerFont.family = "roboto";
Chart.defaults.plugins.tooltip.footerFont.size = 20;
Chart.defaults.plugins.tooltip.footerFont.weight = "700";
Chart.defaults.plugins.tooltip.footerAlign = "center";
Chart.defaults.plugins.tooltip.footerSpacing = 3;
Chart.defaults.plugins.tooltip.footerMarginTop = 0;
Chart.defaults.plugins.tooltip.padding = 12;
Chart.defaults.plugins.tooltip.displayColors = false;

// Chart Dataset Linear
Chart.defaults.elements.line.borderWidth = 3;
Chart.defaults.elements.point.pointStyle = "rect";
Chart.defaults.elements.point.radius = 4;
Chart.defaults.elements.point.hoverRadius = 8;

// Chart Dataset Bar
Chart.defaults.elements.bar.borderWidth = 0;
Chart.defaults.elements.bar.borderRadius = 0;
Chart.defaults.elements.bar.borderSkipped = false;
Chart.defaults.elements.bar.pointStyle = "rect";

export default Chart;
