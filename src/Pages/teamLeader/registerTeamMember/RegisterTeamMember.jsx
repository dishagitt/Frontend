// import React, { useEffect, useState , useCallback} from "react";
// import Register from "../../auth/Register"; 
// import { toast } from "react-toastify";
// import axios from "axios";
// import "./RegisterTeamMember.css";

// const RegisterTeamMember = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [editingMember, setEditingMember] = useState(null); // track which member is being edited
//   const userId = localStorage.getItem("userId");

//   const fetchTeamMembers = useCallback(async () => {
//     try {
//       const response = await axios.get(`/api/team-members/${userId}`);
//       setTeamMembers(response.data);
//     } catch (err) {
//       toast.error(err,"Failed to load team members");
//     }
//   }, [userId]);
  
//   useEffect(() => {
//     fetchTeamMembers();
//   }, [fetchTeamMembers]);
  
  

//   const handleSuccess = () => {
//     toast.success(editingMember ? "Team member updated!" : "Team member registered!");
//     setEditingMember(null); // clear edit mode
//     fetchTeamMembers();
//   };

//   const handleEdit = (member) => {
//     setEditingMember(member);
//   };

//   const handleDelete = async (memberId) => {
//     if (!window.confirm("Are you sure you want to delete this team member?")) return;

//     try {
//       await axios.delete(`/api/team-members/${memberId}`);
//       toast.success("Team member deleted!");
//       fetchTeamMembers();
//     } catch (error) {
//       toast.error(error,"Error deleting team member");
//     }
//   };

//   return (
//     <div className="team-member-register-page">
//       <h1>{editingMember ? "Update Team Member" : "Register Team Member"}</h1>
      
//       <Register
//         presetUserType="team-member"
//         hideUserTypeSelect={true}
//         onSuccess={handleSuccess}
//         editData={editingMember}
//       />

//       <h2>Registered Team Members</h2>
//       {teamMembers.length === 0 ? (
//         <p>No team members registered yet.</p>
//       ) : (
//         <table className="team-member-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Contact</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {teamMembers.map((member) => (
//               <tr key={member._id}>
//                 <td>{member.firstName} {member.lastName}</td>
//                 <td>{member.email}</td>
//                 <td>{member.contact}</td>
//                 <td>
//                   <button onClick={() => handleEdit(member)}>Edit</button>
//                   <button onClick={() => handleDelete(member._id)} style={{ marginLeft: "10px" }}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default RegisterTeamMember;




import React, { useEffect, useState } from "react";
import axios from "axios";
import Register from "../../auth/Register"; 
import { toast } from "react-toastify";
import "./RegisterTeamMember.css";



const RegisterTeamMember = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingMember, setEditingMember] = useState(null); 
  

  const fetchMembers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setMembers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch team members:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleSuccess = () => {
        toast.success(editingMember ? "Team member updated!" : "Team member registered!");
        setEditingMember(null); // clear edit mode
        fetchMembers();
      };
    
      const handleEdit = (member) => {
        setEditingMember(member);
      };

  return (
    <div className="team-member-register-page">
      <h1>{editingMember ? "Update Team Member" : "Register Team Member"}</h1>
    <Register
            presetUserType="team-member"
            hideUserTypeSelect={true}
            onSuccess={handleSuccess}
            editData={editingMember}
          />

    <div className="team-member-list">
      <h2>Registered Team Members</h2>
      {loading ? (
        <p>Loading members...</p>
      ) : (
        <table className="team-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.username}</td>
                <td>
                  <button className="edit-user-btn" onClick={handleEdit}>Edit</button>
                  <button className="del-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default RegisterTeamMember;
