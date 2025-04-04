import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminAnnouncement.css";

const AdminAnnouncement = () => {
  const [message, setMessage] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      // First, check localStorage
      const storedAnnouncements = JSON.parse(localStorage.getItem("announcements"));
      if (storedAnnouncements) {
        setAnnouncements(storedAnnouncements);
        return;
      }
  
      // If localStorage is empty, fetch from API (dummy data)
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const formattedData = response.data.map((item) => ({
        id: item.id,
        message: item.title,
        date: new Date().toLocaleDateString(),
      }));
      
      setAnnouncements(formattedData);
    } catch (err) {
      console.error("Error fetching announcements:", err);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
  
    const newAnnouncement = {
      message,
      date: new Date().toLocaleDateString(),
    };
  
    try {
      //api call to save msg in database
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newAnnouncement);
      if (response.status === 201) {
        const updatedAnnouncements = [{ ...newAnnouncement, id: response.data.id }, ...announcements];
        
        // Save to state
        setAnnouncements(updatedAnnouncements);
        
        // Store in localStorage to persist after reload
        localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements));
  
        setSuccess("Announcement sent successfully!");
        setMessage("");
      } else {
        setError("Failed to send announcement. Please try again.");
      }
    } catch (err) {
      setError(err,"Error sending announcement. Check your connection.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      //api call to delete item from list(database)
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const updatedAnnouncements = announcements.filter((item) => item.id !== id);
  
      // Update state
      setAnnouncements(updatedAnnouncements);
  
      // Update localStorage
      localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements));
    } catch (err) {
      console.error("Error deleting announcement:", err);
    }
  };
  

  return (
    <div className="admin-announcement-page">
      <div className="announcement-container">
        <h2>Post an Announcement</h2>
        <form onSubmit={handleSubmit} className="announcement-form">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter announcement message"
            rows="4"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Posting..." : "Send Announcement"}
          </button>
          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      <div className="announcement-list-container">
        <h3>List of Announcements</h3>
        {announcements.length > 0 ? (
          <ul className="announcement-list">
            {announcements.map((announcement) => (
              <li key={announcement.id} className="announcement-item">
                <span className="announcement-text">{announcement.message}</span>
                <span className="announcement-date">({announcement.date})</span>
                <button className="delete-btn" onClick={() => handleDelete(announcement.id)}>
                  ❌
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-announcements">No announcements available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminAnnouncement;
