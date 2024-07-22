import React, { PureComponent } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Monday",
    averageTime: 10,
  },
  {
    name: "Tuesday",
    averageTime: 20,
  },
  {
    name: "Wednesday",
    averageTime: 30,
  },
  {
    name: "Thursday",
    averageTime: 40,
  },
  {
    name: "Friday",
    averageTime: 50,
  },
  {
    name: "Saturday",
    averageTime: 60,
  },
  {
    name: "Sunday",
    averageTime: 70,
  },
];

export default class AverageTimeChart extends PureComponent {
  render() {
    return (
      <BarChart width={700} height={500} data={data}>
        <Bar dataKey="averageTime" fill="hsl(var(--primary))" />
        <XAxis dataKey="name" />
        <YAxis dataKey="averageTime" />
      </BarChart>
    );
  }
}
