// import { useEffect, useState } from "react";
// import "./dashboard.css";

// const AdminDashboard = () => {
//   const [roomBookings, setRoomBookings] = useState([]);
//   const [tableBookings, setTableBookings] = useState([]);
//   const [eventBookings, setEventBookings] = useState([]);
//   const [contactMessages, setContactMessages] = useState([]);

//   const [activeTab, setActiveTab] = useState("rooms");

//   // Separate page state per tab → better UX
//   const [roomPage, setRoomPage] = useState(1);
//   const [tablePage, setTablePage] = useState(1);
//   const [eventPage, setEventPage] = useState(1);
//   const [contactPage, setContactPage] = useState(1);

//   const pageSize = 8;

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchAll();
//   }, []);

//   const fetchAll = async () => {
//     setLoading(true);
//     try {
//       const [rRes, tRes, eRes, cRes] = await Promise.all([
//         fetch("http://localhost:5000/api/rooms/bookings", { credentials: "include" }),
//         fetch("http://localhost:5000/api/tables/bookings", { credentials: "include" }),
//         fetch("http://localhost:5000/api/events/inquiries", { credentials: "include" }),
//         fetch("http://localhost:5000/api/contact/admin", { credentials: "include" }),
//       ]);

//       const r = await rRes.json();
//       const t = await tRes.json();
//       const e = await eRes.json();
//       const c = await cRes.json();

//       setRoomBookings(r.data || []);
//       setTableBookings(t.data || []);
//       setEventBookings(e.data || []);
//       setContactMessages(c.data || []);
//     } catch (err) {
//       console.error("Failed to load dashboard data", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateStatus = async (type, id, status) => {
//     try {
//       await fetch(`http://localhost:5000/api/admin/booking/${type}/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ status }),
//       });
//       fetchAll();
//     } catch (err) {
//       console.error("Status update failed", err);
//     }
//   };

//   const markContactRead = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/api/contact/admin/${id}/read`, {
//         method: "PATCH",
//         credentials: "include",
//       });
//       fetchAll();
//     } catch (err) {
//       console.error("Mark read failed", err);
//     }
//   };

//   const getPageState = () => {
//     switch (activeTab) {
//       case "rooms":   return roomPage;
//       case "tables":  return tablePage;
//       case "banquet": return eventPage;
//       case "contact": return contactPage;
//       default:        return 1;
//     }
//   };

//   const setPageState = (newPage) => {
//     switch (activeTab) {
//       case "rooms":   setRoomPage(newPage);   break;
//       case "tables":  setTablePage(newPage);  break;
//       case "banquet": setEventPage(newPage);  break;
//       case "contact": setContactPage(newPage); break;
//       default: break;
//     }
//   };

//   const paginate = (data) => {
//     const page = getPageState();
//     return data.slice((page - 1) * pageSize, page * pageSize);
//   };

//   const getTotalPages = (data) => Math.ceil(data.length / pageSize);

//   const changeTab = (tab) => {
//     setActiveTab(tab);
//     setPageState(1);
//   };

//   const renderTable = (title, data, type, columns, extra = null) => {
//     const paginated = paginate(data);
//     const totalPages = getTotalPages(data);

//     return (
//       <section className="admin-section">
//         <div className="section-header">
//           <h2>{title}</h2>
//         </div>

//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 {columns.map(col => (
//                   <th key={col}>{col.toUpperCase()}</th>
//                 ))}
//                 <th>STATUS</th>
//                 {/* <th>ACTION</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {paginated.map(item => (
//                 <tr key={item._id}>
//                   {columns.map(col => (
//                     <td key={col}>{item[col] ?? "-"}</td>
//                   ))}
//                   <td>
//                     <span className={`badge badge-${(item.status || "pending").toLowerCase()}`}>
//                       {item.status || "pending"}
//                     </span>
//                   </td>
//                   <td className="action-cell">
//                     {/* <button
//                       className="btn btn-approve"
//                       onClick={() => updateStatus(type, item._id, "approved")}
//                       disabled={item.status === "approved"}
//                     >
//                       Approve
//                     </button> */}
//                     {/* <button
//                       className="btn btn-reject"
//                       onClick={() => updateStatus(type, item._id, "rejected")}
//                       disabled={item.status === "rejected"}
//                     >
//                       Reject
//                     </button> */}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {data.length > 0 && (
//           <div className="pagination">
//             <button
//               className="btn-pagination"
//               disabled={getPageState() === 1}
//               onClick={() => setPageState(Math.max(1, getPageState() - 1))}
//             >
//               ← Prev
//             </button>
//             <span>Page {getPageState()} of {totalPages}</span>
//             <button
//               className="btn-pagination"
//               disabled={getPageState() >= totalPages}
//               onClick={() => setPageState(getPageState() + 1)}
//             >
//               Next →
//             </button>
//           </div>
//         )}
//       </section>
//     );
//   };

//   const renderContact = () => {
//     const data = contactMessages;
//     const paginated = paginate(data);
//     const totalPages = getTotalPages(data);

//     return (
//       <section className="admin-section">
//         <div className="section-header">
//           <h2>Contact Messages</h2>
//         </div>
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>NAME</th>
//                 <th>EMAIL</th>
//                 <th>PHONE</th>
//                 <th>MESSAGE</th>
//                 <th>STATUS</th>
//                 <th>ACTION</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginated.map(msg => (
//                 <tr key={msg._id}>
//                   <td>{msg.name}</td>
//                   <td>{msg.email}</td>
//                   <td>{msg.phone || "—"}</td>
//                   <td className="message-cell">{msg.message}</td>
//                   <td>
//                     <span className={`badge badge-${(msg.status || "new").toLowerCase()}`}>
//                       {msg.status || "new"}
//                     </span>
//                   </td>
//                   <td>
//                     {msg.status === "new" && (
//                       <button
//                         className="btn btn-read"
//                         onClick={() => markContactRead(msg._id)}
//                       >
//                         Mark Read
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {data.length > 0 && (
//           <div className="pagination">
//             <button
//               className="btn-pagination"
//               disabled={getPageState() === 1}
//               onClick={() => setPageState(Math.max(1, getPageState() - 1))}
//             >
//               ← Prev
//             </button>
//             <span>Page {getPageState()} of {totalPages}</span>
//             <button
//               className="btn-pagination"
//               disabled={getPageState() >= totalPages}
//               onClick={() => setPageState(getPageState() + 1)}
//             >
//               Next →
//             </button>
//           </div>
//         )}
//       </section>
//     );
//   };

//   return (
//     <div className="admin-layout">
//       <aside className="admin-sidebar">
//         <div className="sidebar-header">
//           <h2>Aurora</h2>
//           <span className="sidebar-subtitle">Admin Panel</span>
//         </div>

//         <nav className="sidebar-nav">
//           <button
//             className={`nav-item ${activeTab === "rooms" ? "active" : ""}`}
//             onClick={() => changeTab("rooms")}
//           >
//             Room Bookings
//           </button>
//           <button
//             className={`nav-item ${activeTab === "tables" ? "active" : ""}`}
//             onClick={() => changeTab("tables")}
//           >
//             Table Reservations
//           </button>
//           <button
//             className={`nav-item ${activeTab === "banquet" ? "active" : ""}`}
//             onClick={() => changeTab("banquet")}
//           >
//             Banquet & Events
//           </button>
//           <button
//             className={`nav-item ${activeTab === "contact" ? "active" : ""}`}
//             onClick={() => changeTab("contact")}
//           >
//             Contact Messages
//           </button>
//         </nav>
//       </aside>

//       <main className="admin-main">
//         <header className="main-header">
//           <h1>Dashboard</h1>
//           <p className="welcome">Welcome back, Admin</p>
//         </header>

//         {loading ? (
//           <div className="loading">Loading data...</div>
//         ) : (
//           <div className="content-wrapper">
//             {activeTab === "rooms" &&
//               renderTable("Room Bookings", roomBookings, "room", ["name", "phone", "roomType", "guests"])}
            
//             {activeTab === "tables" &&
//               renderTable("Table Reservations", tableBookings, "table", ["name", "phone", "date", "time", "guests"])}
            
//             {activeTab === "banquet" &&
//               renderTable("Banquet & Event Inquiries", eventBookings, "event", ["name", "phone", "eventType", "eventDate", "guests", "message"])}
            
//             {activeTab === "contact" && renderContact()}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;


import React from 'react'

const AdminDashboard = () => {
  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard










// import { useEffect, useState } from "react";
// import "./dashboard.css";

// import DashboardSidebar from "./DashboardSidebar";
// import DashboardTables from "./DashboardTables";
// import ContactTable from "./ContactTable";



// const AdminDashboard = () => {
//   const [roomBookings, setRoomBookings] = useState([]);
//   const [tableBookings, setTableBookings] = useState([]);
//   const [eventBookings, setEventBookings] = useState([]);
//   const [contactMessages, setContactMessages] = useState([]);

//   const [activeTab, setActiveTab] = useState("rooms");
//   const [loading, setLoading] = useState(true);

//   // pagination states
//   const [roomPage, setRoomPage] = useState(1);
//   const [tablePage, setTablePage] = useState(1);
//   const [eventPage, setEventPage] = useState(1);
//   const [contactPage, setContactPage] = useState(1);

//   const pageSize = 8;

//   useEffect(() => {
//     fetchAll();
//   }, []);

//   const fetchAll = async () => {
//     setLoading(true);
//     try {
//       const [r, t, e, c] = await Promise.all([
//         fetch("http://localhost:5000/api/rooms/bookings", { credentials: "include" }).then(r => r.json()),
//         fetch("http://localhost:5000/api/tables/bookings", { credentials: "include" }).then(r => r.json()),
//         fetch("http://localhost:5000/api/events/inquiries", { credentials: "include" }).then(r => r.json()),
//         fetch("http://localhost:5000/api/contact/admin", { credentials: "include" }).then(r => r.json()),
//       ]);

//       setRoomBookings(r.data || []);
//       setTableBookings(t.data || []);
//       setEventBookings(e.data || []);
//       setContactMessages(c.data || []);
//     } catch (err) {
//       console.error("Dashboard load failed", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const pageMap = {
//     rooms: [roomPage, setRoomPage],
//     tables: [tablePage, setTablePage],
//     banquet: [eventPage, setEventPage],
//     contact: [contactPage, setContactPage],
//   };

//   return (
//     <div className="admin-layout">
//       <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       <main className="admin-main">
//         <header className="main-header">
//           <h1>Dashboard</h1>
//           <p className="welcome">Welcome back, Admin</p>
//         </header>

//         {loading ? (
//           <div className="loading">Loading data...</div>
//         ) : (
//           <>
//             {activeTab !== "contact" && (
//               <DashboardTables
//                 activeTab={activeTab}
//                 data={{ roomBookings, tableBookings, eventBookings }}
//                 pageMap={pageMap}
//                 pageSize={pageSize}
//               />
//             )}

//             {activeTab === "contact" && (
//               <ContactTable
//                 data={contactMessages}
//                 pageState={pageMap.contact}
//                 pageSize={pageSize}
//                 refresh={fetchAll}
//               />
//             )}
//           </>
//         )}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
