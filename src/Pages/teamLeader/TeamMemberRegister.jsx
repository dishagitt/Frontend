import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../../Redux/actions/authActions";
// import axios from "axios";
import { toast } from "react-toastify";

const TeamMemberRegister = () => {
//   const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    password: "",
    usertype: "team member",
  });


//   const [loading, setLoading] = useState(false);

//   const validateInputs = () => {
//     const { name, email, phone, enrollmentNo, password } = formData;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!name || !email || !phone || !enrollmentNo || !password) {
//       toast.error("Please fill out all fields.");
//       return false;
//     }
//     if (!emailRegex.test(email)) {
//       toast.error("Invalid email format.");
//       return false;
//     }
//     if (phone.length !== 10 || isNaN(phone)) {
//       toast.error("Phone number must be exactly 10 digits.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateInputs()) return;

//     setLoading(true);
//     try {
//       // Step 1: Check if user already exists
//       const res = await axios.post("/api/users/check-existence", {
//         email: formData.email,
//         usertype: formData.usertype,
//       });

//       if (res.data.exists) {
//         toast.error("User already exists with this email or enrollment number.");
//         // setLoading(false);
//         return;
//       }

//       // Step 2: Register the user
//       const result = await dispatch(registerUser(formData));
//       if (registerUser.fulfilled.match(result)) {
//         console.log(formData);
//         toast.success("Team member registered successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           contact: "",
//           email: "",
//           password: "",
//           usertype: "team member",
//         });
//       } else {
//         toast.error(result.payload?.message || "Registration failed.");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };


const handleSubmit = async (e) => {
       e.preventDefault();
       console.log(formData);
       toast.success("Team member registered successfully!");
       alert("registration successfull")
               setFormData({
                 firstName: "",
                 lastName: "",
                 contact: "",
                 email: "",
                 password: "",
                 usertype: "team member",
               });

}

   return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register Team Member</h2>
        {/* {error && <p className="error">{error}</p>} */}
        
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
        
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName}onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
        
        <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact}  onChange={(e) => setFormData({ ...formData, contact: e.target.value })} required />
        
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        
        <input type="password" name="password" placeholder="Password" value={formData.password}  onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />

        {/* <select name="userType" value={formData.userType}  onChange={(e) => setFormData({ ...formData, usertype: e.target.value })} required>
          <option value="team member">Team Member</option>
        </select> */}

        <input
            type="text"
            name="userType"
            value={formData.usertype}
            disabled
        />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default TeamMemberRegister;
