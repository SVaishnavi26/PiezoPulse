import { Row, Col, Card, Badge } from "antd";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import EnergyUltraChart from "../components/EnergyUltraChart";
import UtilizationGauge from "../components/UtilizationGauge";
import StorageRadial from "../components/StorageRadial";
import SiteHeatmap from "../components/SiteHeatmap";
import AlertsPanel from "../components/AlertsPanel";
import GeoMap from "../components/GeoMap";

export default function Dashboard() {
  const [energy, setEnergy] = useState(12450);
  const [gridOffset, setGridOffset] = useState(34);
  const [utilization, setUtilization] = useState(78);
  const [storage, setStorage] = useState(62);

  // 🔴 Simulated live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prev) => prev + Math.floor(Math.random() * 50));
      setGridOffset((prev) => Math.min(90, prev + Math.random()));
      setUtilization((prev) => Math.min(100, prev + Math.random()));
      setStorage((prev) => Math.max(20, prev + (Math.random() - 0.5) * 2));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🔥 Ultra KPI Row */}
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Badge status="processing" text="Live Energy" />
            <h2>
              <CountUp end={energy} duration={1.5} /> Wh
            </h2>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Badge status="success" text="Grid Offset" />
            <h2>
              <CountUp end={gridOffset} decimals={1} /> %
            </h2>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Badge status="warning" text="Utilization" />
            <h2>
              <CountUp end={utilization} decimals={1} /> %
            </h2>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Badge status="default" text="Storage Level" />
            <h2>
              <CountUp end={storage} decimals={1} /> %
            </h2>
          </Card>
        </Col>
      </Row>

      {/* 📊 Charts Section */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12}>
          <EnergyUltraChart />
        </Col>
        <Col span={6}>
          <UtilizationGauge value={utilization} />
        </Col>
        <Col span={6}>
          <StorageRadial value={storage} />
        </Col>
      </Row>

      {/* 🔥 Intelligence Section */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={8}>
          <SiteHeatmap />
        </Col>
        <Col span={8}>
          <AlertsPanel />
        </Col>
        <Col span={8}>
          <GeoMap />
        </Col>
      </Row>
    </>
  );
}
