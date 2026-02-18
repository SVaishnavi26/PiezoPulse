// components/EnergyLineChart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { energyRecords } from "../data/mockData";

export default function EnergyLineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={energyRecords}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#1890ff" />
      </LineChart>
    </ResponsiveContainer>
  );
}
