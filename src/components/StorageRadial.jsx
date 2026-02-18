// components/StorageRadial.jsx
import { Progress, Card } from "antd";

export default function StorageRadial({ value }) {
  return (
    <Card title="Storage Capacity">
      <Progress
        type="dashboard"
        percent={Math.round(value)}
        strokeColor="#faad14"
      />
    </Card>
  );
}
