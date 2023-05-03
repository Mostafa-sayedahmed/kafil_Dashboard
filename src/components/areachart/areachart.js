import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function Areachart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };
  const labels = props.labels;
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: props.Values,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(100, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
