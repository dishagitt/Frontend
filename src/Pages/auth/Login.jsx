// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../Redux/slices/authSlice.js";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "./Login.css";

// const Login = ({ loginType = "user" }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { loading, error } = useSelector((state) => state.auth);

// const handleSubmit = (e) => {
//   e.preventDefault();

//   // Basic validation
//   if (!email || !password) {
//     toast.error("Please fill in all fields");
//     return;
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     toast.error("Please enter a valid email");
//     return;
//   }

//   if (password.length < 6) {
//     toast.error("Password must be at least 6 characters");
//     return;
//   }

//   // Dispatch login if all validations pass
//   dispatch(loginUser({ email, password, navigate }));
// };


//   const redirectToRegister = () => {
//     navigate("/register");
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//     }
//   }, [error]);

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>{loginType === "admin" ? "Admin Login" : "User Login"}</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           autoComplete="email"
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="current-password"
//           required
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         {/* Show register link only if login type is 'user' */}
//         {loginType === "user" && (
//           <p>
//             Don't have an account?
//             <span onClick={redirectToRegister}> Register here!</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;






import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userType, setUserType] = useState("");


  const navigate = useNavigate();
    
  const redirectToRegister =() => {
    navigate("/register"); // Redirect to register page
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // Dummy authentication (Replace with real API call)
    // if (email === "abc@gmail.com" && password === "abc123" && userType === "team leader")
    if (email === "abc@gmail.com" && password === "abc123"){
        localStorage.setItem("isAuthenticated", "true");
        navigate("/app/home"); // Redirect to dashboard
      } else {
        alert("invalid credentials")
      }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          autoComplete="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          autoComplete="current-password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
         {/* <select name="userType"
         onChange={(e) => setUserType(e.target.value)}
         required>
          <option value="mentor">Mentor</option>
          <option value="team leader">Team Leader</option>
          <option value="team leader">Team Member</option>
          <option value="volunteer">Volunteer</option>
        </select> */}
        <button type="submit">Login
        </button>
      <p>don't have an account.<span onClick={redirectToRegister}> Register here!</span></p>
      </form>
    </div>
  );
};

export default Login;