// src/components/UnderperformingTable.jsx
import { Table, Tag } from "antd";

const data = [
  { id: 1, name: "Subway West", utilization: 45 },
  { id: 2, name: "Mall South", utilization: 52 },
];

export default function UnderperformingTable() {
  const columns = [
    { title: "Site", dataIndex: "name" },
    {
      title: "Utilization (%)",
      dataIndex: "utilization",
      render: (value) => (
        <Tag color={value < 50 ? "red" : "orange"}>{value}%</Tag>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="id" />;
}
