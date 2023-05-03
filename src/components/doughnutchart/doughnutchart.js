import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Doughnutchart(props) {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "# of Votes",
        data: props.Values,
        backgroundColor: props.colors,
        borderColor: props.colors,
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
