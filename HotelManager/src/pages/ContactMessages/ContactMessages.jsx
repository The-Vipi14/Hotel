import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Empty,
  Input,
  Row,
  Space,
  Spin,
  Statistic,
  Table,
  Tag,
  Tooltip,
  Typography,
  Button,
  Modal,
  message,
} from "antd";

import {
  MailOutlined,
  PhoneOutlined,
  EyeOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const ContactMessages = () => {
  const [allMessages, setAllMessages] = useState([]);
  const [todayMessages, setTodayMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchContactMessages();
  }, []);

  const fetchContactMessages = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/admin/contact",
        {
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch contact messages");
      }

      const data = await res.json();

      setAllMessages(data.ContactMessages || []);
      setTodayMessages(data.todayContactMessages || []);
    } catch (error) {
      console.error(
        "Failed to fetch contact messages",
        error
      );

      message.error("Failed to load contact messages");
    } finally {
      setLoading(false);
    }
  };

  /* ================= VIEW MESSAGE ================= */

  const handleViewMessage = (record) => {
    setSelectedMessage(record);
    setModalOpen(true);
  };

  /* ================= SEARCH ================= */

  const filteredMessages = allMessages.filter((msg) => {
    const search = searchText.toLowerCase();

    return (
      msg.name?.toLowerCase().includes(search) ||
      msg.email?.toLowerCase().includes(search) ||
      msg.phone?.toLowerCase().includes(search) ||
      msg.message?.toLowerCase().includes(search)
    );
  });

  /* ================= TABLE COLUMNS ================= */

  const columns = [
    {
      title: "Guest",
      key: "guest",
      fixed: "left",
      width: 220,

      render: (_, record) => (
        <Space direction="vertical" size={2}>
          <Text strong>{record.name}</Text>

          <Text type="secondary">
            {record.email}
          </Text>
        </Space>
      ),
    },

    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 150,

      render: (phone) =>
        phone ? (
          <a href={`tel:${phone}`}>
            <PhoneOutlined /> {phone}
          </a>
        ) : (
          "-"
        ),
    },

    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      width: 320,

      render: (text) => (
        <Paragraph
          ellipsis={{
            rows: 2,
            tooltip: text,
          }}
          style={{
            margin: 0,
          }}
        >
          {text || "-"}
        </Paragraph>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 130,

      render: (status) => {
        const normalizedStatus =
          status?.toLowerCase();

        let color = "default";

        if (
          normalizedStatus === "new" ||
          normalizedStatus === "unread"
        ) {
          color = "blue";
        }

        if (
          normalizedStatus === "read" ||
          normalizedStatus === "replied"
        ) {
          color = "green";
        }

        if (
          normalizedStatus === "pending"
        ) {
          color = "orange";
        }

        return (
          <Tag color={color}>
            {status || "New"}
          </Tag>
        );
      },
    },

    {
      title: "Received",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 180,

      render: (date) => (
        <Space size={6}>
          <ClockCircleOutlined />

          <Text type="secondary">
            {new Date(date).toLocaleString()}
          </Text>
        </Space>
      ),
    },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,

      render: (_, record) => (
        <Tooltip title="View message">
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() =>
              handleViewMessage(record)
            }
          />
        </Tooltip>
      ),
    },
  ];

  /* ================= TABLE ================= */

  const renderTable = (messages) => {
    if (messages.length === 0) {
      return (
        <Empty
          description="No contact enquiries found"
          style={{
            padding: "50px 0",
          }}
        />
      );
    }

    return (
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={messages}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) =>
            `Total ${total} enquiries`,
        }}
        scroll={{
          x: 1100,
        }}
      />
    );
  };

  return (
    <div style={{ padding: "24px" }}>
      {/* ================= HEADER ================= */}

      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <Title
          level={2}
          style={{
            marginBottom: 4,
          }}
        >
          Guest Enquiries
        </Title>

        <Text type="secondary">
          Manage guest enquiries and communication
          requests received through the hotel website.
        </Text>
      </div>

      {/* ================= STATISTICS ================= */}

      <Row
        gutter={[16, 16]}
        style={{
          marginBottom: "24px",
        }}
      >
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Today's Enquiries"
              value={todayMessages.length}
              prefix={<MailOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Total Enquiries"
              value={allMessages.length}
              prefix={<MailOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Unread Enquiries"
              value={
                allMessages.filter(
                  (msg) =>
                    msg.status?.toLowerCase() ===
                      "new" ||
                    msg.status?.toLowerCase() ===
                      "unread"
                ).length
              }
              prefix={<MailOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* ================= TODAY ================= */}

      <Card
        title="Today's Guest Enquiries"
        style={{
          marginBottom: "24px",
        }}
      >
        {loading ? (
          <div
            style={{
              minHeight: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          renderTable(todayMessages)
        )}
      </Card>

      {/* ================= ALL MESSAGES ================= */}

      <Card
        title="All Guest Enquiries"
        extra={
          <Input
            allowClear
            placeholder="Search guest, email, phone..."
            prefix={<MailOutlined />}
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
            style={{
              width: 280,
            }}
          />
        }
      >
        {loading ? (
          <div
            style={{
              minHeight: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          renderTable(filteredMessages)
        )}
      </Card>

      {/* ================= MESSAGE MODAL ================= */}

      <Modal
        title="Guest Enquiry"
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          setSelectedMessage(null);
        }}
        footer={[
          selectedMessage?.email && (
            <Button
              key="email"
              type="primary"
              icon={<MailOutlined />}
              href={`mailto:${selectedMessage.email}`}
            >
              Reply by Email
            </Button>
          ),

          selectedMessage?.phone && (
            <Button
              key="phone"
              icon={<PhoneOutlined />}
              href={`tel:${selectedMessage.phone}`}
            >
              Call Guest
            </Button>
          ),
        ]}
      >
        {selectedMessage && (
          <Space
            direction="vertical"
            size="large"
            style={{
              width: "100%",
            }}
          >
            <div>
              <Text type="secondary">
                Guest
              </Text>

              <Title
                level={4}
                style={{
                  marginTop: 4,
                }}
              >
                {selectedMessage.name}
              </Title>
            </div>

            <div>
              <Text type="secondary">
                Email
              </Text>

              <div>
                <a
                  href={`mailto:${selectedMessage.email}`}
                >
                  {selectedMessage.email}
                </a>
              </div>
            </div>

            <div>
              <Text type="secondary">
                Phone
              </Text>

              <div>
                <a
                  href={`tel:${selectedMessage.phone}`}
                >
                  {selectedMessage.phone}
                </a>
              </div>
            </div>

            <div>
              <Text type="secondary">
                Received
              </Text>

              <div>
                {new Date(
                  selectedMessage.createdAt
                ).toLocaleString()}
              </div>
            </div>

            <div>
              <Text type="secondary">
                Message
              </Text>

              <Card
                size="small"
                style={{
                  marginTop: 8,
                  background: "#fafafa",
                }}
              >
                <Paragraph
                  style={{
                    margin: 0,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {selectedMessage.message}
                </Paragraph>
              </Card>
            </div>
          </Space>
        )}
      </Modal>
    </div>
  );
};

export default ContactMessages;