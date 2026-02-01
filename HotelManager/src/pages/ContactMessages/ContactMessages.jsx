import { useState, useEffect } from "react";

const ContactMessages = () => {
  const [allMessages, setAllMessages] = useState([]);
  const [todayMessages, setTodayMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactMessages = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/admin/contact",
          {
            credentials: "include",
          }
        );

        const data = await res.json();

        setAllMessages(data.ContactMessages || []);
        setTodayMessages(data.todayContactMessages || []);
      } catch (error) {
        console.error("Failed to fetch contact messages");
      } finally {
        setLoading(false);
      }
    };

    fetchContactMessages();
  }, []);

  if (loading) return <h3>Loading contact messages...</h3>;

  const renderTable = (messages) => (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Status</th>
            <th>Received At</th>
          </tr>
        </thead>
        <tbody>
          {messages.length === 0 ? (
            <tr>
              <td colSpan="6">No messages found</td>
            </tr>
          ) : (
            messages.map((msg) => (
              <tr key={msg._id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.phone}</td>
                <td>{msg.message}</td>
                <td>{msg.status}</td>
                <td>
                  {new Date(msg.createdAt).toLocaleString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="contact-page">
      <h2>Today’s Contact Messages</h2>
      {renderTable(todayMessages)}

      <h2 style={{ marginTop: "40px" }}>
        All Contact Messages
      </h2>
      {renderTable(allMessages)}
    </div>
  );
};

export default ContactMessages;
