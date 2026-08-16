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

import {
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const TableBookings = () => {
  const [allTables, setAllTables] = useState([]);
  const [todayTables, setTodayTables] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTableBookings = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/admin/tables",
        {
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch table bookings");
      }

      const data = await res.json();

      setAllTables(data.TableBookings || []);
      setTodayTables(data.todayTableBookings || []);
    } catch (error) {
      console.error("Failed to fetch table bookings", error);
      message.error("Failed to load table reservations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTableBookings();
  }, []);

  const handleApprove = (booking) => {
    console.log("Approve table booking:", booking._id);

    // Backend API will be connected here.
    message.success("Booking approved");
  };

  const handleCancel = (booking) => {
    console.log("Cancel table booking:", booking._id);

    // Backend API will be connected here.
    message.success("Booking cancelled");
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
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 140,
      render: (date) =>
        new Date(date).toLocaleDateString(),
    },

    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      width: 120,
    },

    {
      title: "Guests",
      dataIndex: "guests",
      key: "guests",
      width: 100,
      align: "center",
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

  const renderBookingTable = (tables) => {
    if (tables.length === 0) {
      return (
        <Empty
          description="No table reservations found"
          style={{ padding: "40px 0" }}
        />
      );
    }

    return (
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={tables}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} reservations`,
        }}
        scroll={{ x: 850 }}
      />
    );
  };

  return (
    <div style={{ padding: "24px" }}>
      {/* ================= HEADER ================= */}

      <div style={{ marginBottom: "24px" }}>
        <Title level={2} style={{ marginBottom: "4px" }}>
          Table Reservations
        </Title>

        <Text type="secondary">
          Manage and monitor restaurant table reservations.
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
              title="Today's Reservations"
              value={todayTables.length}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Total Reservations"
              value={allTables.length}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Pending Reservations"
              value={
                allTables.filter(
                  (table) => !table.approved
                ).length
              }
            />
          </Card>
        </Col>
      </Row>

      {/* ================= TODAY ================= */}

      <Card
        title="Today's Table Reservations"
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
          renderBookingTable(todayTables)
        )}
      </Card>

      {/* ================= ALL RESERVATIONS ================= */}

      <Card title="All Table Reservations">
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
          renderBookingTable(allTables)
        )}
      </Card>
    </div>
  );
};

export default TableBookings;