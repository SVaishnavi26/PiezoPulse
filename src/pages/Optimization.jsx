// pages/Optimization.jsx
import { Card, Form, InputNumber, Select, Button, Result } from "antd";
import { useState } from "react";

export default function Optimization() {
  const [result, setResult] = useState(null);

  const onFinish = (values) => {
    const { energy, storage, objective } = values;

    let allocation = {};
    let gridOffset = 0;
    let utilization = 0;

    if (objective === "grid") {
      allocation = { Lighting: 70, IoT: 30 };
      gridOffset = Math.min(80, energy / 20);
      utilization = 60;
    }

    if (objective === "utilization") {
      allocation = { Lighting: 40, IoT: 60 };
      gridOffset = 50;
      utilization = Math.min(95, energy / 10);
    }

    if (objective === "balanced") {
      allocation = { Lighting: 50, IoT: 50 };
      gridOffset = 65;
      utilization = 75;
    }

    setResult({ allocation, gridOffset, utilization });
  };

  return (
    <Card title="Energy Optimization Engine">
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Available Energy (Wh/day)" name="energy" required>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Storage Level (%)" name="storage" required>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Objective" name="objective" required>
          <Select>
            <Select.Option value="grid">Max Grid Offset</Select.Option>
            <Select.Option value="utilization">Max Utilization</Select.Option>
            <Select.Option value="balanced">Balanced</Select.Option>
          </Select>
        </Form.Item>

        <Button type="primary" htmlType="submit">Optimize</Button>
      </Form>

      {result && (
        <Result
          status="success"
          title="Optimization Results"
          subTitle={`Grid Offset: ${result.gridOffset}% | Utilization: ${result.utilization}%`}
          extra={
            <div>
              <p>Lighting Allocation: {result.allocation.Lighting}%</p>
              <p>IoT Allocation: {result.allocation.IoT}%</p>
            </div>
          }
        />
      )}
    </Card>
  );
}
