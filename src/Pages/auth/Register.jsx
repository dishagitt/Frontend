// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../redux/actions/authActions";
// import { useNavigate } from "react-router-dom";
// import "./Register.css";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     contact: "",
//     email: "",
//     password: "",
//     userType: "team leader", // Default selection
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.auth);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(registerUser({ ...formData, navigate }));
//   };

// const redirectToLogin = () =>{
//   navigate("/login");
// }

//   return (
//     <div className="register-container">
//       <form className="register-form" onSubmit={handleSubmit}>
//         <h2>Register</h2>
//         {error && <p className="error">{error}</p>}
        
//         <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        
//         <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        
//         <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
        
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

//         <select name="userType" value={formData.userType} onChange={handleChange} required>
//           <option value="team leader">Team Leader</option>
//           <option value="volunteer">Volunteer</option>
//           <option value="mentor">Mentor</option>
//         </select>

//         <button type="submit" disabled={loading}>
//           {loading ? "Registering..." : "Register"}
//         </button>
{/* <p>already have an account.<span onClick={redirectToLogin}> Login here!</span></p> */}
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
          <option value="team leader">Team Leader</option>
          <option value="volunteer">Volunteer</option>
          <option value="mentor">Mentor</option>
        </select>

        <button type="submit">
          Register
        </button>
        <p>already have an account.<span onClick={redirectToLogin}> Login here!</span></p>
      </form>
    </div>
  );
};

export default Register;