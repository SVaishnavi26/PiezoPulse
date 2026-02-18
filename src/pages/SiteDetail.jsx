// src/pages/SiteDetail.jsx
import { Card, Descriptions, Table } from "antd";
import { useParams } from "react-router-dom";
import { sites, energyRecords, utilizationRecords } from "../data/mockData";

export default function SiteDetail() {
  const { id } = useParams();
  const site = sites.find((s) => s.id === Number(id));

  const energyColumns = [
    { title: "Date", dataIndex: "date" },
    { title: "Energy (Wh)", dataIndex: "value" },
  ];

  const utilizationColumns = [
    { title: "Site ID", dataIndex: "siteId" },
    { title: "Utilization (%)", dataIndex: "utilization" },
  ];

  if (!site) return <div>Site not found</div>;

  return (
    <>
      <Card title="Site Information" style={{ marginBottom: 20 }}>
        <Descriptions bordered>
          <Descriptions.Item label="Name">{site.name}</Descriptions.Item>
          <Descriptions.Item label="Location">{site.location}</Descriptions.Item>
          <Descriptions.Item label="Capacity">{site.capacity} Wh</Descriptions.Item>
          <Descriptions.Item label="Status">{site.status}</Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title="Energy Records" style={{ marginBottom: 20 }}>
        <Table
          columns={energyColumns}
          dataSource={energyRecords}
          rowKey="date"
          pagination={false}
        />
      </Card>

      <Card title="Utilization Records">
        <Table
          columns={utilizationColumns}
          dataSource={utilizationRecords.filter(
            (u) => u.siteId === Number(id)
          )}
          rowKey="siteId"
          pagination={false}
        />
      </Card>
    </>
  );
}
