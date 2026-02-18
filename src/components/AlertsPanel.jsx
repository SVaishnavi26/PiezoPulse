
// components/AlertsPanel.jsx
import { Card, List, Badge } from "antd";

const alerts = [
  { text: "Site Metro underperforming", severity: "error" },
  { text: "Storage nearing threshold", severity: "warning" },
];

export default function AlertsPanel() {
  return (
    <Card title="AI Alerts">
      <List
        dataSource={alerts}
        renderItem={(item) => (
          <List.Item>
            <Badge status={item.severity} text={item.text} />
          </List.Item>
        )}
      />
    </Card>
  );
}
