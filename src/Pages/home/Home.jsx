import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [updates, setUpdates] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    // Dummy URLs that return JSON data
    const fetchUpdates = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const formattedUpdates = response.data.map((item) => ({
          id: item.id,
          title: item.title,
          date: "Mar 25, 2025",
        }));
        setUpdates(formattedUpdates);
      } catch (error) {
        console.error("Error fetching updates:", error);
      }
    };

    const fetchWinners = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=9");
        const formattedWinners = response.data.map((user, index) => ({
          id: user.id,
          teamName: user.company.name,
          competition: `Competition ${index + 1}`,
          image: `https://randomuser.me/api/portraits/lego/${index + 1}.jpg`,
        }));
        setWinners(formattedWinners);
      } catch (error) {
        console.error("Error fetching winners:", error);
      }
    };

    fetchUpdates();
    fetchWinners();
  }, []);

  return (

 

    <div className="user-home-container">
      {/* Updates Section */}
      <section className="updates-section">
        <h2>Latest Updates</h2>
        <ul>
          {updates.map((update) => (
            <li key={update.id}>
              <strong>{update.title}</strong> <span>({update.date})</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Past Winners Section */}
      <section className="winners-section">
        <h2>Past Winners</h2>
        <div className="winner-cards">
          {winners.map((winner) => (
            <div key={winner.id} className="winner-card">
              <img src={winner.image} alt={winner.teamName} />
              <h4>{winner.teamName}</h4>
              <p>{winner.competition}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home
