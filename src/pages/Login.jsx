import { Card, Form, Input, Button } from "antd";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    login(values.username);
    navigate("/");
  };

  return (
    <Card title="PiezoPulse Login" style={{ width: 400, margin: "100px auto" }}>
      <Form onFinish={onFinish}>
        <Form.Item name="username" required>
          <Input placeholder="admin / analyst / viewer" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </Card>
  );
}
