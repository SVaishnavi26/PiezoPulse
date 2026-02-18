// pages/Sites.jsx
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { sites } from "../data/mockData";

export default function Sites() {
  const navigate = useNavigate();

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Location", dataIndex: "location" },
    { title: "Capacity", dataIndex: "capacity" },
    {
      title: "Action",
      render: (_, record) => (
        <Button onClick={() => navigate(`/sites/${record.id}`)}>
          View
        </Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={sites} rowKey="id" />;
}
