import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  Col,
  Empty,
  List,
  Row,
  Spin,
  Table,
  Typography,
} from "antd";

import DashboardCharts from "../../components/DashboardCharts/DashboardCharts";

const { Title, Text } = Typography;

const AdminDashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [recentRoomBookings, setRecentRoomBookings] = useState([]);
  const [todayContactMessages, setTodayContactMessages] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:5000/api/admin/dashboard",
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setStats(res.data.stats);
        setRecentRoomBookings(res.data.recentRoomBookings);
        setTodayContactMessages(res.data.todayConotactMessages);
      }
    } catch (error) {
      console.error("Dashboard API error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "24px" }}>
        <Card>
          <div
            style={{
              minHeight: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spin size="large" />
          </div>
        </Card>
      </div>
    );
  }

  const bookingColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Room Type",
      dataIndex: "roomType",
      key: "roomType",
    },
    {
      title: "Guests",
      dataIndex: "guests",
      key: "guests",
    },
    {
      title: "Check In",
      dataIndex: "checkIn",
      key: "checkIn",
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Check Out",
      dataIndex: "checkOut",
      key: "checkOut",
      render: (date) => new Date(date).toLocaleDateString(),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Title level={2}>Admin Dashboard</Title>

      {/* ================= STATS ================= */}

      {stats && (
        <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
          <Col xs={24} sm={12} lg={6}>
            <StatCard
              title="Room Bookings"
              value={stats.totalRoomBookings}
            />
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <StatCard
              title="Table Bookings"
              value={stats.totalTableBookings}
            />
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <StatCard
              title="Event Inquiries"
              value={stats.totalEventInquiries}
            />
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <StatCard
              title="Contact Messages"
              value={stats.totalContactMessages}
            />
          </Col>
        </Row>
      )}

      {/* ================= CHARTS ================= */}

      {stats && (
        <Card
          title="Overview"
          style={{ marginBottom: "24px" }}
        >
          <DashboardCharts
            stats={stats}
            recentRoomBookings={recentRoomBookings}
          />
        </Card>
      )}

      {/* ================= RECENT ROOM BOOKINGS ================= */}

      <Card
        title="Recent Room Bookings"
        style={{ marginBottom: "24px" }}
      >
        {recentRoomBookings.length === 0 ? (
          <Empty description="No room bookings found" />
        ) : (
          <Table
            rowKey="_id"
            columns={bookingColumns}
            dataSource={recentRoomBookings}
            pagination={false}
            scroll={{ x: 800 }}
          />
        )}
      </Card>

      {/* ================= TODAY CONTACT MESSAGES ================= */}

      <Card title="Today's Contact Messages">
        {todayContactMessages.length === 0 ? (
          <Empty description="No contact messages today" />
        ) : (
          <List
            dataSource={todayContactMessages}
            renderItem={(msg) => (
              <List.Item>
                <List.Item.Meta
                  title={msg.name}
                  description={msg.email}
                />
              </List.Item>
            )}
          />
        )}
      </Card>
    </div>
  );
};

/* ================= STAT CARD ================= */

const StatCard = ({ title, value }) => {
  return (
    <Card>
      <Text type="secondary">{title}</Text>

      <Title
        level={2}
        style={{
          margin: "8px 0 0",
        }}
      >
        {value}
      </Title>
    </Card>
  );
};

export default AdminDashboardPage;