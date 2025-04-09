// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser, fetchUserTypes } from "../../Redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "./Register.css";

// const Register = ({
//   presetUserType = "",           // Force a certain userType (e.g., "team-member")
//   hideUserTypeSelect = false,   // Hide dropdown if true
//   onSuccess = null,             // Callback after successful registration
// }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     contact: "",
//     email: "",
//     password: "",
//     userType: presetUserType || "",
//     idProof: null,
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { loading, error, userTypes } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (!hideUserTypeSelect) {
//       dispatch(fetchUserTypes());
//     }
//   }, [dispatch, hideUserTypeSelect]);

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//     }
//   }, [error]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "idProof") {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleRemoveFile = () => {
//     setFormData({ ...formData, idProof: null });
//     const fileInput = document.querySelector('input[name="idProof"]');
//     if (fileInput) fileInput.value = "";
//   };

//   const validateForm = () => {
//     const { firstName, lastName, contact, email, password, userType, idProof } = formData;

//     const nameRegex = /^[A-Za-z]+$/;
//     const contactRegex = /^[0-9]{10}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

//     if (!firstName || !nameRegex.test(firstName)) {
//       toast.error("Enter a valid first name (letters only)");
//       return false;
//     }
//     if (!lastName || !nameRegex.test(lastName)) {
//       toast.error("Enter a valid last name (letters only)");
//       return false;
//     }
//     if (!contact || !contactRegex.test(contact)) {
//       toast.error("Enter a valid 10-digit contact number");
//       return false;
//     }
//     if (!email || !emailRegex.test(email)) {
//       toast.error("Enter a valid email address");
//       return false;
//     }
//     if (!password || !passwordRegex.test(password)) {
//       toast.error("Password must be at least 8 characters, include a number and a special character");
//       return false;
//     }
//     if (!userType) {
//       toast.error("User type is required");
//       return false;
//     }
//     if (!idProof) {
//       toast.error("Please upload an ID proof");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });

//     const resultAction = await dispatch(registerUser({ formData: data, navigate }));

//     if (registerUser.fulfilled.match(resultAction)) {
//       if (onSuccess) {
//         onSuccess(); // optional callback (used for team leader registering member)
//       } else {
//         navigate("/login");
//       }
//     }

//     if (registerUser.rejected.match(resultAction)) {
//       const errorMessage = resultAction.payload;
//       if (errorMessage && errorMessage.toLowerCase().includes("already exists")) {
//         toast.error("User already exists. Please login or use another email.");
//       } else {
//         toast.error(errorMessage || "Registration failed.");
//       }
//     }
//   };

//   const redirectToLogin = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="register-container">
//       <form className="register-form" onSubmit={handleSubmit} encType="multipart/form-data">
//         <h2>Register</h2>

//         <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />

//         <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />

//         <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />

//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           autoComplete="new-password"
//         />

//         {/* Conditionally render userType dropdown */}
//         {!hideUserTypeSelect && (
//           <select name="userType" value={formData.userType} onChange={handleChange} required>
//             <option value="">Select User Type</option>
//             {userTypes?.map((type) => (
//               <option key={type._id} value={type.name}>
//                 {type.name}
//               </option>
//             ))}
//           </select>
//         )}

//         <input
//           type="file"
//           name="idProof"
//           accept="image/*"
//           onChange={handleChange}
//           required
//         />

//         {formData.idProof && (
//           <div className="file-preview">
//             <p>{formData.idProof.name}</p>
//             <button type="button" onClick={handleRemoveFile}>Remove</button>
//           </div>
//         )}

//         <button type="submit" disabled={loading}>
//           {loading ? "Registering..." : "Register"}
//         </button>

//         {!presetUserType && (
//           <p>
//             Already have an account? <span onClick={redirectToLogin}>Login here!</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Register;







import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    password: "",
    userType: "team leader", // Default selection
  });

const redirectToLogin = () =>{
  navigate("/login");
}

//   const dispatch = useDispatch();
  const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    navigate("/app/home"); // Redirect to dashboard
   
  }
  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {/* {error && <p className="error">{error}</p>} */}
        
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        
        <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
        
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

        <select name="userType" value={formData.userType} onChange={handleChange} required>
          <option value="mentor">Mentor</option>
          <option value="team leader">Team Leader</option>
          <option value="team member">Team Member</option>
          <option value="volunteer">Volunteer</option>
        </select>

        <button type="submit">
          Register
        </button>
        <p>already have an account.<span className="register-span" onClick={redirectToLogin}> Login here!</span></p>
      </form>
    </div>
  );
};

export default Register;