// components/UtilizationGauge.jsx
import { Progress, Card } from "antd";

export default function UtilizationGauge({ value }) {
  return (
    <Card title="Utilization Efficiency">
      <Progress
        type="circle"
        percent={Math.round(value)}
        strokeColor="#52c41a"
      />
    </Card>
  );
}
