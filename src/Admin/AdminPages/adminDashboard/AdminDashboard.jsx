import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/carts");
        const data = response.data.carts;

        // Calculate total participants and winners using dummy data
        const totalParticipants = data.reduce(
          (sum, cart) => sum + cart.totalProducts,
          0
        );
        const totalWinners = Math.floor(totalParticipants * 0.6); // Winners are always less than participants
        const totalStudents = totalParticipants * 6; // 1 group = 6 students

        // Generating last 5 years dynamically
        const lastFiveYears = Array.from(
          { length: 5 },
          (_, i) => currentYear - i
        ).reverse();

        setAnalyticsData({
          totalParticipants,
          totalWinners,
          totalStudents,
          yearlyData: lastFiveYears.map((year, index) => ({
            year,
            participants: data[index] ? data[index].totalProducts : 0,
            winners: Math.floor(
              (data[index] ? data[index].totalProducts : 0) * 0.6
            ),
          })),
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentYear]);

  if (!analyticsData) {
    return <div className="loading">Loading...</div>;
  }

  // Data for Participants Bar Chart
  const participantChartData = {
    labels: analyticsData.yearlyData.map((entry) => entry.year),
    datasets: [
      {
        label: "Participant Groups",
        data: analyticsData.yearlyData.map((entry) => entry.participants),
        backgroundColor: "#007BFF", // Blue
      },
    ],
  };

  // Data for Winners Bar Chart
  const winnerChartData = {
    labels: analyticsData.yearlyData.map((entry) => entry.year),
    datasets: [
      {
        label: "Winner Groups",
        data: analyticsData.yearlyData.map((entry) => entry.winners),
        backgroundColor: "#FFC107", // Yellow
      },
    ],
  };

  // Data for Circular Graph (Doughnut)
  const doughnutData = {
    labels: ["Total Participated Students"],
    datasets: [
      {
        data: [analyticsData.totalStudents],
        backgroundColor: ["#28A745"],
        hoverBackgroundColor: ["#218838"],
      },
    ],
  };

  // Doughnut Chart Options
  const doughnutOptions = {
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
    cutout: "70%", // Hollow space in the middle
  };

  return (

    <div className="dashboard-container">
      <h2 className="dashboard-heading">Competition Analytics</h2>

      {/* Cards Section */}
      <div className="stats-wrapper">
        <div className="card-head">
          <h3>Total Participant Groups (Previous Year)</h3>
        </div>
        <div className="stats-container">
          <div className="stats-box">
            <h3>Abc Competition</h3>
            <p>{analyticsData.totalParticipants}</p>
          </div>
          <div className="stats-box">
            <h3>XYZ competition</h3>
            <p>{analyticsData.totalParticipants}</p>
          </div>
        </div>
      </div>

      <div className="stats-wrapper ">
        <div className="card-head">
          <h3>Total Winner Groups (Previous Year)</h3>
        </div>
        <div className="stats-container">
          <div className="stats-box">
            <h3>abc competition</h3>
            <p>{analyticsData.totalWinners}</p>
          </div>
          <div className="stats-box">
            <h3>xyz competition</h3>
            <p>{analyticsData.totalWinners}</p>
          </div>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="charts-container">
        <div className="chart-head">
          <h3 className="group-heading">Last 5 Years Data in Graphs</h3>
        </div>
        <div className="chart-box">
          <h3>Participant Groups Data</h3>
          <Bar
            data={participantChartData}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="chart-box">
          <h3>Winner Groups Data</h3>
          <Bar
            data={winnerChartData}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="chart-box doughnut-chart">
          <h3>Total Participated Students Data</h3>
          <Doughnut data={doughnutData} options={doughnutOptions} />
          <div className="doughnut-text">{analyticsData.totalStudents}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
