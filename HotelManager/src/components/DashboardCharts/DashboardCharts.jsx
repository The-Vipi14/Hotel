import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const DashboardCharts = ({ stats, recentRoomBookings }) => {
  /* ===== BAR CHART (STATS OVERVIEW) ===== */
  const statsData = {
    labels: [
      "Room Bookings",
      "Table Bookings",
      "Event Inquiries",
      "Contact Messages",
    ],
    datasets: [
      {
        label: "Total Count",
        data: [
          stats.totalRoomBookings,
          stats.totalTableBookings,
          stats.totalEventInquiries,
          stats.totalContactMessages,
        ],
        backgroundColor: [
          "#2563eb",
          "#16a34a",
          "#f59e0b",
          "#dc2626",
        ],
      },
    ],
  };

  /* ===== LINE CHART (ROOM BOOKINGS TREND) ===== */
  const bookingDates = recentRoomBookings.map((b) =>
    new Date(b.createdAt).toLocaleDateString()
  );

  const roomTrendData = {
    labels: bookingDates,
    datasets: [
      {
        label: "Room Bookings",
        data: recentRoomBookings.map((_, index) => index + 1),
        borderColor: "#2563eb",
        backgroundColor: "#93c5fd",
        tension: 0.4,
      },
    ],
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginBottom: "40px",
      }}
    >
      <div>
        <h3>Bookings Overview</h3>
        <Bar data={statsData} />
      </div>

      <div>
        <h3>Room Booking Trend</h3>
        <Line data={roomTrendData} />
      </div>
    </div>
  );
};

export default DashboardCharts;
