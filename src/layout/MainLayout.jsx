// layout/MainLayout.jsx
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

export default function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/sites">Sites</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/optimization">Optimization</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/reports">Reports</Link></Menu.Item>
          <Menu.Item key="5"><Link to="/settings">Settings</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff" }}>PiezoPulse</Header>
        <Content style={{ margin: 20 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
