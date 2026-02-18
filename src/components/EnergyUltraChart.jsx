// components/EnergyUltraChart.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { useState, useEffect } from "react";

export default function EnergyUltraChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const base = 300;
    const newData = Array.from({ length: 30 }).map((_, i) => ({
      day: i + 1,
      energy: base + Math.random() * 200,
      forecast: base + Math.random() * 220,
    }));
    setData(newData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="energy" fill="#1890ff33" />
        <Line type="monotone" dataKey="energy" stroke="#1890ff" />
        <Line
          type="monotone"
          dataKey="forecast"
          stroke="#52c41a"
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
