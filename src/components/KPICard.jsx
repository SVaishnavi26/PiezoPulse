// src/components/KPICard.jsx
import { Card, Statistic } from "antd";

export default function KPICard({ title, value }) {
  return (
    <Card>
      <Statistic title={title} value={value} />
    </Card>
  );
}
