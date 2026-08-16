import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Empty,
  Row,
  Space,
  Spin,
  Statistic,
  Table,
  Tag,
  Tooltip,
  Typography,
  Button,
  message,
} from "antd";

import {
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const EventBooking = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [todayEvents, setTodayEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/admin/events",
        {
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch event bookings");
      }

      const data = await res.json();

      setAllEvents(data.EventBookings || []);
      setTodayEvents(data.todayEventBookings || []);
    } catch (error) {
      console.error("Failed to fetch event bookings", error);
      message.error("Failed to load event bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleApprove = (event) => {
    console.log("Approve event:", event._id);

    // Backend API will be connected here.
    message.success("Event booking approved");
  };

  const handleCancel = (event) => {
    console.log("Cancel event:", event._id);

    // Backend API will be connected here.
    message.success("Event booking cancelled");
  };

  const columns = [
    {
      title: "Guest",
      key: "guest",
      fixed: "left",
      width: 180,
      render: (_, record) => (
        <Space direction="vertical" size={0}>
          <Text strong>{record.name}</Text>
          <Text type="secondary">{record.phone}</Text>
        </Space>
      ),
    },

    {
      title: "Event Type",
      dataIndex: "eventType",
      key: "eventType",
      width: 150,
      render: (eventType) => (
        <Tag color="blue">
          {eventType}
        </Tag>
      ),
    },

    {
      title: "Event Date",
      dataIndex: "eventDate",
      key: "eventDate",
      width: 140,
      render: (date) =>
        new Date(date).toLocaleDateString(),
    },

    {
      title: "Guests",
      dataIndex: "guests",
      key: "guests",
      width: 90,
      align: "center",
    },

    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      width: 300,
      render: (messageText) => (
        <Text
          type={messageText ? "secondary" : "secondary"}
          ellipsis={{
            tooltip: messageText || "No message",
          }}
        >
          {messageText || "-"}
        </Text>
      ),
    },

    {
      title: "Status",
      key: "status",
      width: 120,
      render: (record) => (
        <Tag color={record.approved ? "green" : "orange"}>
          {record.approved ? "Approved" : "Pending"}
        </Tag>
      ),
    },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 130,
      render: (_, record) => (
        <Space>
          <Tooltip title="Approve booking">
            <Button
              type="text"
              icon={<CheckOutlined />}
              onClick={() => handleApprove(record)}
            />
          </Tooltip>

          <Tooltip title="Cancel booking">
            <Button
              type="text"
              danger
              icon={<CloseOutlined />}
              onClick={() => handleCancel(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const renderEventTable = (events) => {
    if (events.length === 0) {
      return (
        <Empty
          description="No event bookings found"
          style={{ padding: "40px 0" }}
        />
      );
    }

    return (
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={events}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) =>
            `Total ${total} event bookings`,
        }}
        scroll={{ x: 1100 }}
      />
    );
  };

  return (
    <div style={{ padding: "24px" }}>
      {/* ================= HEADER ================= */}

      <div style={{ marginBottom: "24px" }}>
        <Title level={2} style={{ marginBottom: "4px" }}>
          Event Bookings
        </Title>

        <Text type="secondary">
          Manage banquet, wedding, party and other event inquiries.
        </Text>
      </div>

      {/* ================= STATISTICS ================= */}

      <Row
        gutter={[16, 16]}
        style={{ marginBottom: "24px" }}
      >
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Today's Events"
              value={todayEvents.length}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Total Events"
              value={allEvents.length}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Pending Events"
              value={
                allEvents.filter(
                  (event) => !event.approved
                ).length
              }
            />
          </Card>
        </Col>
      </Row>

      {/* ================= TODAY ================= */}

      <Card
        title="Today's Events"
        style={{ marginBottom: "24px" }}
      >
        {loading ? (
          <div
            style={{
              minHeight: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          renderEventTable(todayEvents)
        )}
      </Card>

      {/* ================= ALL EVENTS ================= */}

      <Card title="All Event Bookings">
        {loading ? (
          <div
            style={{
              minHeight: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          renderEventTable(allEvents)
        )}
      </Card>
    </div>
  );
};

export default EventBooking;