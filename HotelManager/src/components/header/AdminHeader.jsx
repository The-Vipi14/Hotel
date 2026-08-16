import { Layout, Button, Typography, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { Title, Text } = Typography;

const AdminHeader = ({ collapsed, setCollapsed }) => {
  return (
    <Header
      style={{
        padding: "0 24px",
        height: 64,
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Space size="middle">
        <Button
          type="text"
          icon={
            collapsed ? (
              <MenuUnfoldOutlined />
            ) : (
              <MenuFoldOutlined />
            )
          }
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: 18,
          }}
        />

        <div>
          <Title
            level={4}
            style={{
              margin: 0,
            }}
          >
            Hotel Ananda
          </Title>

          <Text
            type="secondary"
            style={{
              fontSize: 12,
            }}
          >
            Administration Dashboard
          </Text>
        </div>
      </Space>
    </Header>
  );
};

export default AdminHeader;