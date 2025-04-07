// import React, { useEffect, useState } from "react";
// import "./TeamInfo.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRegisteredUsers } from "../../Redux/actions/userActions";
// import axios from "axios";
// import { toast } from "react-toastify";

// const TeamInfo = () => {
//   const dispatch = useDispatch();
//   const { registeredUsers } = useSelector((state) => state.users);

//   const [teamDetails, setTeamDetails] = useState({
//     teamName: "",
//     members: [],
//   });

//   const [mentorDetails, setMentorDetails] = useState({
//     mentorName: "",
//     department: "",
//     skills: "",
//   });

//   const [competitionDetails, setCompetitionDetails] = useState({
//     type: "",
//     name: "",
//     year: "",
//     department: "",
//     category: "",
//   });

//   useEffect(() => {
//     dispatch(fetchRegisteredUsers());
//   }, [dispatch]);

//   const handleTeamDetailChange = (index, field, value) => {
//     const updatedMembers = [...teamDetails.members];
//     updatedMembers[index] = {
//       ...updatedMembers[index],
//       ...registeredUsers[index],
//       [field]: value,
//     };
//     setTeamDetails({ ...teamDetails, members: updatedMembers });
//   };

//   const handleTeamSave = async () => {
//     try {
//       await axios.post("/api/team/save", teamDetails);
//       toast.success("Team Details Saved Successfully");
//     } catch (error) {
//       toast.error("Failed to Save Team Details");
//     }
//   };

//   const handleMentorSave = async () => {
//     try {
//       await axios.post("/api/mentor/save", mentorDetails);
//       toast.success("Mentor Details Saved Successfully");
//     } catch (error) {
//       toast.error("Failed to Save Mentor Details");
//     }
//   };

//   const handleCompetitionSave = async () => {
//     try {
//       await axios.post("/api/competition/save", competitionDetails);
//       toast.success("Competition Info Saved Successfully");
//     } catch (error) {
//       toast.error("Failed to Save Competition Info");
//     }
//   };

//   return (
//     <div className="team-info-container">
//       <h2>Team Details</h2>
//       <form className="form-section">
//         <label>Team Name:</label>
//         <input
//           type="text"
//           value={teamDetails.teamName}
//           onChange={(e) => setTeamDetails({ ...teamDetails, teamName: e.target.value })}
//         />

//         {registeredUsers &&
//           registeredUsers.map((user, index) => (
//             <div key={user.id} className="user-card">
//               <h4>{user.userType === "team leader" ? "Team Leader" : "Team Member"}</h4>
//               <p>Name: {user.firstName} {user.lastName}</p>
//               <p>Email: {user.email}</p>
//               <p>Phone: {user.contact}</p>

//               <label>Gender:</label>
//               <input
//                 type="text"
//                 value={teamDetails.members[index]?.gender || ""}
//                 onChange={(e) => handleTeamDetailChange(index, "gender", e.target.value)}
//               />

//               <label>Branch:</label>
//               <input
//                 type="text"
//                 value={teamDetails.members[index]?.branch || ""}
//                 onChange={(e) => handleTeamDetailChange(index, "branch", e.target.value)}
//               />

//               <label>Department:</label>
//               <input
//                 type="text"
//                 value={teamDetails.members[index]?.dept || ""}
//                 onChange={(e) => handleTeamDetailChange(index, "dept", e.target.value)}
//               />

//               <label>Enrollment No:</label>
//               <input
//                 type="text"
//                 value={teamDetails.members[index]?.enroll || ""}
//                 onChange={(e) => handleTeamDetailChange(index, "enroll", e.target.value)}
//               />
//             </div>
//           ))}
//         <button className="submit-btn" type="button" onClick={handleTeamSave}>
//           Save Team Details
//         </button>
//       </form>

//       <h2>Mentor Details</h2>
//       <form className="form-section">
//         <label>Mentor Name:</label>
//         <input
//           type="text"
//           value={mentorDetails.mentorName}
//           onChange={(e) => setMentorDetails({ ...mentorDetails, mentorName: e.target.value })}
//         />

//         <label>Department:</label>
//         <input
//           type="text"
//           value={mentorDetails.department}
//           onChange={(e) => setMentorDetails({ ...mentorDetails, department: e.target.value })}
//         />

//         <label>Skills:</label>
//         <input
//           type="text"
//           value={mentorDetails.skills}
//           onChange={(e) => setMentorDetails({ ...mentorDetails, skills: e.target.value })}
//         />

//         <button className="submit-btn" type="button" onClick={handleMentorSave}>
//           Save Mentor Details
//         </button>
//       </form>

//       <h2>Competition Info</h2>
//       <form className="form-section">
//         <label>Type:</label>
//         <input
//           type="text"
//           value={competitionDetails.type}
//           onChange={(e) => setCompetitionDetails({ ...competitionDetails, type: e.target.value })}
//         />

//         <label>Name:</label>
//         <input
//           type="text"
//           value={competitionDetails.name}
//           onChange={(e) => setCompetitionDetails({ ...competitionDetails, name: e.target.value })}
//         />

//         <label>Year:</label>
//         <input
//           type="text"
//           value={competitionDetails.year}
//           onChange={(e) => setCompetitionDetails({ ...competitionDetails, year: e.target.value })}
//         />

//         <label>Department:</label>
//         <input
//           type="text"
//           value={competitionDetails.department}
//           onChange={(e) => setCompetitionDetails({ ...competitionDetails, department: e.target.value })}
//         />

//         <label>Category:</label>
//         <input
//           type="text"
//           value={competitionDetails.category}
//           onChange={(e) => setCompetitionDetails({ ...competitionDetails, category: e.target.value })}
//         />

//         <button className="submit-btn" type="button" onClick={handleCompetitionSave}>
//           Save Competition Info
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TeamInfo;


// import React, { useEffect, useState } from "react";
import React ,{useState} from "react";
import "./TeamInfo.scss";
// import { useDispatch, useSelector } from "react-redux";
 import { useSelector } from "react-redux";
// import { fetchRegisteredUsers } from "../../Redux/actions/authActions";
// import axios from "axios";
import { toast } from "react-toastify";

const TeamInfo = () => {
//   const dispatch = useDispatch();
  const { registeredUsers } = useSelector((state) => state.users);

  const [teamDetails, setTeamDetails] = useState({
    teamName: "",
    members: [],
  });

  const [mentorDetails, setMentorDetails] = useState({
    mentorName: "",
    department: "",
    skills: "",
  });

  const [competitionDetails, setCompetitionDetails] = useState({
    type: "",
    name: "",
    year: "",
    department: "",
    category: "",
  });

//   useEffect(() => {
//     dispatch(fetchRegisteredUsers());
//   }, [dispatch]);

  const handleTeamDetailChange = (index, field, value) => {
    const updatedMembers = [...teamDetails.members];
    updatedMembers[index] = {
      ...updatedMembers[index],
      ...registeredUsers[index],
      [field]: value,
    };
    setTeamDetails({ ...teamDetails, members: updatedMembers });
  };

  const handleTeamSave = async () => {
    try {
        console("team deails fetched sccessfully");
    //   await axios.post("/api/team/save", teamDetails);
      toast.success("Team Details Saved Successfully");
    } catch (error) {
      toast.error(error,"Failed to Save Team Details");
    }
  };

  const handleMentorSave = async () => {
    try {
    //   await axios.post("/api/mentor/save", mentorDetails);
    console("mentor deails fetched sccessfully");
      toast.success("Mentor Details Saved Successfully");
    } catch (error) {
      toast.error(error,"Failed to Save Mentor Details");
    }
  };

  const handleCompetitionSave = async () => {
    try {
    //   await axios.post("/api/competition/save", competitionDetails);
    console("competition deails fetched sccessfully");
      toast.success("Competition Info Saved Successfully");
    } catch (error) {
      toast.error(error,"Failed to Save Competition Info");
    }
  };

  return (
    <div className="team-info-container">
      <h2>Team Details</h2>
      <form className="form-section">
        <label>Team Name:</label>
        <input
          type="text"
          value={teamDetails.teamName}
          onChange={(e) => setTeamDetails({ ...teamDetails, teamName: e.target.value })}
        />

        {registeredUsers &&
          registeredUsers.map((user, index) => (
            <div key={user.id} className="user-card">
              <h4>{user.userType === "team leader" ? "Team Leader" : "Team Member"}</h4>
              <p>Name: {user.firstName} {user.lastName}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.contact}</p>

              <label>Gender:</label>
              <input
                type="text"
                value={teamDetails.members[index]?.gender || ""}
                onChange={(e) => handleTeamDetailChange(index, "gender", e.target.value)}
              />

              <label>Branch:</label>
              <input
                type="text"
                value={teamDetails.members[index]?.branch || ""}
                onChange={(e) => handleTeamDetailChange(index, "branch", e.target.value)}
              />

              <label>Department:</label>
              <input
                type="text"
                value={teamDetails.members[index]?.dept || ""}
                onChange={(e) => handleTeamDetailChange(index, "dept", e.target.value)}
              />

              <label>Enrollment No:</label>
              <input
                type="text"
                value={teamDetails.members[index]?.enroll || ""}
                onChange={(e) => handleTeamDetailChange(index, "enroll", e.target.value)}
              />
            </div>
          ))}
        <button className="submit-btn" type="button" onClick={handleTeamSave}>
          Save Team Details
        </button>
      </form>

      <h2>Mentor Details</h2>
      <form className="form-section">
        <label>Mentor Name:</label>
        <input
          type="text"
          value={mentorDetails.mentorName}
          onChange={(e) => setMentorDetails({ ...mentorDetails, mentorName: e.target.value })}
        />

        <label>Department:</label>
        <input
          type="text"
          value={mentorDetails.department}
          onChange={(e) => setMentorDetails({ ...mentorDetails, department: e.target.value })}
        />

        <label>Skills:</label>
        <input
          type="text"
          value={mentorDetails.skills}
          onChange={(e) => setMentorDetails({ ...mentorDetails, skills: e.target.value })}
        />

        <button className="submit-btn" type="button" onClick={handleMentorSave}>
          Save Mentor Details
        </button>
      </form>

      <h2>Competition Info</h2>
      <form className="form-section">
        <label>Type:</label>
        <input
          type="text"
          value={competitionDetails.type}
          onChange={(e) => setCompetitionDetails({ ...competitionDetails, type: e.target.value })}
        />

        <label>Name:</label>
        <input
          type="text"
          value={competitionDetails.name}
          onChange={(e) => setCompetitionDetails({ ...competitionDetails, name: e.target.value })}
        />

        <label>Year:</label>
        <input
          type="text"
          value={competitionDetails.year}
          onChange={(e) => setCompetitionDetails({ ...competitionDetails, year: e.target.value })}
        />

        <label>Department:</label>
        <input
          type="text"
          value={competitionDetails.department}
          onChange={(e) => setCompetitionDetails({ ...competitionDetails, department: e.target.value })}
        />

        <label>Category:</label>
        <input
          type="text"
          value={competitionDetails.category}
          onChange={(e) => setCompetitionDetails({ ...competitionDetails, category: e.target.value })}
        />

        <button className="submit-btn" type="button" onClick={handleCompetitionSave}>
          Save Competition Info
        </button>
      </form>
    </div>
  );
};

export default TeamInfo;
