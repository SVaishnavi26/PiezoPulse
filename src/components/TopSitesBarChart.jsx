// src/components/TopSitesBarChart.jsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Central Plaza", energy: 1200 },
  { name: "Metro Station", energy: 980 },
  { name: "Airport", energy: 870 },
];

export default function TopSitesBarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="energy" fill="#52c41a" />
      </BarChart>
    </ResponsiveContainer>
  );
}
