import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import {
  Layout,
  Menu,
  Avatar,
  Typography,
  Button,
  Space,
  Spin,
  Tooltip,
} from "antd";

import {
  DashboardOutlined,
  HomeOutlined,
  CalendarOutlined,
  BankOutlined,
  MessageOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar = ({ collapsed }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  const fetchAdminProfile = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/profile",
        {
          withCredentials: true,
        }
      );

      if (res.data.adminDetails) {
        setAdmin(res.data.adminDetails);
      }
    } catch (error) {
      console.error(error,"Failed to fetch admin profile");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/admin/logout",
        {},
        {
          withCredentials: true,
        }
      );

      navigate("/login");
    } catch (error) {
      console.error(error,"Logout failed");
    }
  };

  const menuItems = [
    {
      key: "/",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/rooms",
      icon: <HomeOutlined />,
      label: "Room Bookings",
    },
    {
      key: "/tables",
      icon: <CalendarOutlined />,
      label: "Table Reservations",
    },
    {
      key: "/events",
      icon: <BankOutlined />,
      label: "Banquet & Events",
    },
    {
      key: "/messages",
      icon: <MessageOutlined />,
      label: "Contact Messages",
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Sider
      width={250}
      collapsedWidth={80}
      collapsed={collapsed}
      theme="light"
      style={{
        minHeight: "100vh",
        borderRight: "1px solid #f0f0f0",
      }}
    >
      {/* ================= LOGO ================= */}

      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed
            ? "center"
            : "flex-start",
          padding: collapsed ? 0 : "0 20px",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Avatar
          size={40}
          icon={<HomeOutlined />}
          style={{
            background: "#1677ff",
          }}
        />

        {!collapsed && (
          <div style={{ marginLeft: 12 }}>
            <Text strong style={{ display: "block" }}>
              Hotel Ananda
            </Text>

            <Text
              type="secondary"
              style={{ fontSize: 12 }}
            >
              Admin Panel
            </Text>
          </div>
        )}
      </div>

      {/* ================= MENU ================= */}

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
        style={{
          border: "none",
          marginTop: 12,
        }}
      />

      {/* ================= ADMIN ================= */}

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: collapsed ? "12px 8px" : "16px",
          borderTop: "1px solid #f0f0f0",
          background: "#fff",
        }}
      >
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <Spin size="small" />
          </div>
        ) : (
          <Space
            style={{
              width: "100%",
              justifyContent: collapsed
                ? "center"
                : "flex-start",
            }}
          >
            <Tooltip
              title={
                collapsed
                  ? admin?.name || "Administrator"
                  : ""
              }
            >
              <Avatar
                icon={<UserOutlined />}
                style={{
                  background: "#1677ff",
                  flexShrink: 0,
                }}
              >
                {admin?.name?.charAt(0)?.toUpperCase()}
              </Avatar>
            </Tooltip>

            {!collapsed && (
              <>
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <Text
                    strong
                    ellipsis
                    style={{
                      display: "block",
                    }}
                  >
                    {admin?.name || "Administrator"}
                  </Text>

                  <Text
                    type="secondary"
                    ellipsis
                    style={{
                      display: "block",
                      fontSize: 12,
                    }}
                  >
                    {admin?.email || ""}
                  </Text>
                </div>

                <Tooltip title="Logout">
                  <Button
                    type="text"
                    danger
                    icon={<LogoutOutlined />}
                    onClick={handleLogout}
                  />
                </Tooltip>
              </>
            )}
          </Space>
        )}
      </div>
    </Sider>
  );
};

export default Sidebar;