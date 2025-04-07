// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../Redux/actions/authActions";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const { loading, error } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser({ email, password, navigate }));
//   };

// const redirectToRegister =() => {
//   navigate("/register"); // Redirect to register page
// }

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         {error && <p className="error">{error}</p>}
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
{/* <p>don't have an account.<span onClick={redirectToRegister}> Register here!</span></p> */}
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
        localStorage.setItem("isAdminAuthenticated", "true");
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
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
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