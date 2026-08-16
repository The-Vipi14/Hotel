import { useEffect, useState } from "react";
import {
  Button,
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
  message,
} from "antd";

import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const RoomBookings = () => {
  const [allRooms, setAllRooms] = useState([]);
  const [todayRooms, setTodayRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRoomBookings = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/admin/rooms", {
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch room bookings");
      }

      const data = await res.json();

      setAllRooms(data.roomBookingDetails || []);
      setTodayRooms(data.todayRoomBookings || []);
    } catch (error) {
      console.error("Failed to fetch room bookings", error);
      message.error("Failed to load room bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoomBookings();
  }, []);

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
      title: "Room Type",
      dataIndex: "roomType",
      key: "roomType",
      width: 150,
      render: (roomType) => <Tag color="blue">{roomType}</Tag>,
    },
    {
      title: "Guests",
      dataIndex: "guests",
      key: "guests",
      width: 100,
      align: "center",
    },
    {
      title: "Check In",
      dataIndex: "checkIn",
      key: "checkIn",
      width: 140,
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Check Out",
      dataIndex: "checkOut",
      key: "checkOut",
      width: 140,
      render: (date) => new Date(date).toLocaleDateString(),
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
      width: 140,
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

  const renderBookingTable = (rooms) => {
    if (rooms.length === 0) {
      return (
        <Empty
          description="No room bookings found"
          style={{ padding: "40px 0" }}
        />
      );
    }

    return (
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={rooms}
        loading={loading}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} bookings`,
        }}
        scroll={{ x: 1000 }}
      />
    );
  };

  // actions ============================== //

  const handleApprove = () => {
    console.log("booking approved");
  };

  const handleCancel = () => {
    console.log("booking canceled");
  };

  return (
    <div style={{ padding: "24px" }}>
      {/* ================= HEADER ================= */}

      <div style={{ marginBottom: "24px" }}>
        <Title level={2} style={{ marginBottom: "4px" }}>
          Room Bookings
        </Title>

        <Text type="secondary">
          Manage and monitor all hotel room reservations.
        </Text>
      </div>

      {/* ================= STATISTICS ================= */}

      <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic title="Today's Bookings" value={todayRooms.length} />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic title="Total Bookings" value={allRooms.length} />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Pending Bookings"
              value={allRooms.filter((room) => !room.approved).length}
            />
          </Card>
        </Col>
      </Row>

      {/* ================= TODAY'S BOOKINGS ================= */}

      <Card title="Today's Room Bookings" style={{ marginBottom: "24px" }}>
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
          renderBookingTable(todayRooms)
        )}
      </Card>

      {/* ================= ALL BOOKINGS ================= */}

      <Card title="All Room Bookings">
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
          renderBookingTable(allRooms)
        )}
      </Card>
    </div>
  );
};

export default RoomBookings;
