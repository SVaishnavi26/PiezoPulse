// components/SiteHeatmap.jsx
import { Card, Table, Tag } from "antd";

const data = [
  { id: 1, name: "Central", score: 88 },
  { id: 2, name: "Metro", score: 54 },
  { id: 3, name: "Airport", score: 72 },
];

export default function SiteHeatmap() {
  const columns = [
    { title: "Site", dataIndex: "name" },
    {
      title: "Performance",
      dataIndex: "score",
      render: (val) => (
        <Tag color={val > 75 ? "green" : val > 60 ? "orange" : "red"}>
          {val}
        </Tag>
      ),
    },
  ];

  return <Card title="Site Performance Heatmap"><Table columns={columns} dataSource={data} pagination={false} rowKey="id" /></Card>;
}
