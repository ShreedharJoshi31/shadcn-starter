import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    hour: "9am",
    parkedSlots: 3,
  },
  {
    hour: "10am",
    parkedSlots: 4,
  },
  {
    hour: "11am",
    parkedSlots: 5,
  },
  {
    hour: "12am",
    parkedSlots: 5,
  },
  {
    hour: "1pm",
    parkedSlots: 5,
  },
  {
    hour: "2pm",
    parkedSlots: 5,
  },
  {
    hour: "3pm",
    parkedSlots: 5,
  },
  {
    hour: "4pm",
    parkedSlots: 5,
  },
  {
    hour: "5pm",
    parkedSlots: 5,
  },
];

export default class ParkingRadarChart extends PureComponent {
  render() {
    return (
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        height={500}
        width={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="hour" />
        <PolarRadiusAxis />
        <Radar
          name="Parking Slots"
          dataKey="parkedSlots"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  }
}
