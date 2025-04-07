// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "./AddUserType.scss";

// const AddUserType = () => {
//   const [userType, setUserType] = useState("");
//   const [userTypesList, setUserTypesList] = useState([]);

//   useEffect(() => {
//     fetchUserTypes();
//   }, []);

//   const fetchUserTypes = async () => {
//     try {
//       const response = await axios.get("/api/usertype/list");
//       setUserTypesList(response.data);
//     } catch (error) {
//         toast.error(error.response?.data?.message || "Failed to fetch user types");

//     }
//   };

//   const handleAddUserType = async () => {
//     const trimmedType = userType.trim();

//     if (!trimmedType) {
//       toast.warn("User type cannot be empty");
//       return;
//     }

//     const isDuplicate = userTypesList.some(
//       (type) => type?.type?.toLowerCase() === trimmedType.toLowerCase()
//     );

//     if (isDuplicate) {
//       toast.info("This user type already exists");
//       return;
//     }

//     try {
//       const response = await axios.post("/api/usertype/add", {
//         type: trimmedType,
//       });

//       setUserTypesList([...userTypesList, response.data]);
//       setUserType("");
//       toast.success("User type added successfully!");
//     } catch (error) {
//       toast.error(error.response?.data?.message,"Failed to add user type");
//     }
//   };

//   const handleDeleteUserType = async (typeId) => {
//     try {
//       await axios.delete(`/api/usertype/delete/${typeId}`);
//       setUserTypesList(userTypesList.filter((t) => t._id !== typeId));
//       toast.success("User type removed successfully");
//     } catch (error) {
//       toast.error(error.response?.data?.message,"Failed to remove user type");
//     }
//   };

//   return (
//     <div className="add-user-type-container">
//       <h2>Add New User Type</h2>
//       <div className="input-section">
//         <input
//           type="text"
//           placeholder="Enter user type (e.g. Mentor)"
//           value={userType}
//           onChange={(e) => setUserType(e.target.value)}
//         />
//         <button onClick={handleAddUserType}>Add</button>
//       </div>

//       <div className="list-section">
//         <h3>Existing User Types</h3>
//         <ul>
//           {userTypesList.map((type) => (
//             <li key={type._id}>
//               {type.type}
//               <button onClick={() => handleDeleteUserType(type._id)}>
//                 Cancel
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AddUserType;



import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./AddUserType.scss";

const AddUserType = () => {
  const [userType, setUserType] = useState("");
  const [userTypesList, setUserTypesList] = useState([]);

  // Dummy fetch (simulate API call)
  const fetchUserTypes = async () => {
    const dummyData = [
      { _id: "1", type: "Mentor" },
      { _id: "2", type: "Team Leader" },
    ];
    setUserTypesList(dummyData);
  };

  useEffect(() => {
    fetchUserTypes();
  }, []);

  const handleAddUserType = async () => {
    const trimmedType = userType.trim();

    if (!trimmedType) {
      toast.warn("User type cannot be empty");
      return;
    }

    const isDuplicate = userTypesList.some(
      (type) => type.type.toLowerCase() === trimmedType.toLowerCase()
    );

    if (isDuplicate) {
      toast.info("This user type already exists");
      return;
    }

    // Simulate ID generation and adding to list
    const newType = {
      _id: Date.now().toString(),
      type: trimmedType,
    };

    setUserTypesList([...userTypesList, newType]);
    setUserType("");
    toast.success("User type added successfully!");
  };

  const handleDeleteUserType = async (typeId) => {
    const updatedList = userTypesList.filter((t) => t._id !== typeId);
    setUserTypesList(updatedList);
    toast.success("User type removed successfully");
  };

  return (
    <div className="add-user-type-container">
      <h2>Add New User Type</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter user type (e.g. Mentor)"
          value={userType}
          onChange={(e) => setUserType(e.target.value.trimStart())}
        />
        <button onClick={handleAddUserType}>Add</button>
      </div>

      <div className="list-section">
        <h3>Existing User Types</h3>
        <ul>
          {userTypesList.map((type) => (
            <li key={type._id}>
              {type.type}
              <button onClick={() => handleDeleteUserType(type._id)}>
                Cancel
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddUserType;
