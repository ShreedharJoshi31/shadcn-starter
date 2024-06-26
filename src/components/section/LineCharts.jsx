import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    id: "_id",
    carNumberPlate: "HR26BP3543",
    time: "2024-06-23T19:23:14.258+00:00",
    parkedSlots: 1,
    taken_spot: 1,
    isEntering: true,
  },
  {
    id: "_id",
    carNumberPlate: "HR26BP3544",
    time: "2024-06-24T10:00:00.000+00:00",
    parkedSlots: 2,
    taken_spot: 1,
    isEntering: true,
  },
  {
    id: "_id",
    carNumberPlate: "HR26BP3545",
    time: "2024-06-25T12:00:00.000+00:00",
    parkedSlots: 3,
    taken_spot: 1,
    isEntering: true,
  },
  {
    id: "_id",
    carNumberPlate: "HR26BP3546",
    time: "2024-06-26T08:00:00.000+00:00",
    parkedSlots: 2,
    taken_spot: 1,
    isEntering: true,
  },
  {
    id: "_id",
    carNumberPlate: "HR26BP3547",
    time: "2024-06-27T09:00:00.000+00:00",
    parkedSlots: 1,
    taken_spot: 1,
    isEntering: true,
  },
  {
    id: "_id",
    carNumberPlate: "HR26BP3548",
    time: "2024-06-28T11:00:00.000+00:00",
    parkedSlots: 2,
    taken_spot: 1,
    isEntering: true,
  },
  {
    id: "_id",
    carNumberPlate: "HR26BP3549",
    time: "2024-06-29T10:00:00.000+00:00",
    parkedSlots: 3,
    taken_spot: 1,
    isEntering: true,
  },
];

const LineCharts = () => {
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  const processData = (data) => {
    const dayOfWeekCounts = {};
    data.forEach((item) => {
      const dayOfWeek = getDayOfWeek(item.time);
      if (!dayOfWeekCounts[dayOfWeek]) {
        dayOfWeekCounts[dayOfWeek] = 0;
      }
      dayOfWeekCounts[dayOfWeek] += item.parkedSlots;
    });
    return Object.entries(dayOfWeekCounts).map(([day, count]) => ({
      day,
      count,
    }));
  };

  const chartData = processData(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={chartData}>
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
