import React, { useEffect, useState, useRef } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	LinearScale,
	PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const labels = [100, 200, 300, 400, 500, 600, 700];

const options = {
	fill: true,
	responsive: true,
	scales: {
		y: {
			min: 0,
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};

const Chart = () => {
	const chartRef = useRef("null");
	const [chartData, setChartData] = useState({
		datasets: [],
	});

	useEffect(() => {
		const chart = chartRef.current;
		if (!chart) {
			return console.log(chart);
		}

		const createGradientColor = color => {
			const ctx = chart.ctx;
			const gradient = ctx.createLinearGradient(0, 0, 0, 400);
			gradient.addColorStop(0, color);
			gradient.addColorStop(0.99, "rgba(52, 168, 141,0.1");
			gradient.addColorStop(1, "rgba(52, 168, 141,0.1");
			return gradient;
		};

		setChartData({
			datasets: [
				{
					label: "Mis datos gradient",
					data: scores,
					tension: 0,
					borderColor: "cyan",
					pointRadius: 1,
					backgroundColor: "cyan",
					segment: {
						borderColor: function (context) {
							if (context.type === "segment") {
								return context.p1DataIndex % 2 === 0
									? "cyan"
									: "cyan";
							}
							console.log("contexto chart",context);
						},
						backgroundColor: function (context) {
							if (context.type === "segment") {
								return createGradientColor(
									context.p1DataIndex % 2 === 0
										? "cyan"
										: "cyan"
								);
							}
							console.log(context);
						},
					},
				},
			],
			labels,
		});
	}, []);

	return <Line data={chartData} options={options} ref={chartRef} />;
};
export default Chart;
