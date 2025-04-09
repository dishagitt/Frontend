// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import AdminLogin from "../Admin/AdminComponents/AdminLogin";
// import Login from "../Pages/auth/Login";
// import Home from "../Pages/home/Home";
// import Register from "../Pages/auth/Register";
// import MainLayout from "../Pages/layouts/MainLayout";
// import AdminLayout from "../Admin/AdminPages/AdminLayout/AdminLayout";
// import AdminDashboard from "../Admin/AdminPages/adminDashboard/AdminDashboard";
// import AdminAnnouncement from "../Admin/AdminPages/adminAnnouncement/AdminAnnouncement";
// import TeamMemberRegister from "../Pages/teamLeader/TeamMemberRegister";
// import TeamInfo from "../Pages/teamLeader/TeamInfo";
// import AddUserType from "../Admin/AdminPages/userRoles/AddUserType";

// const AppRouter = () => {
//   const isAuthenticated = localStorage.getItem("isAdminAuthenticated") === "true";

//   return (
//       <Routes>

//         <Route path="/" element={<Navigate to="/login" />} />

//         {/*  -------- User Routes -------- */}

//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//        {/* Routes that use MainLayout (With Sidebar/Navbar/Footer) */}
//        <Route path="/app" element={<MainLayout />}>
//            {/* Protected User Home page Route */}
//           <Route
//             path="/app/home"
//             element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/app/register-team-member"
//             element={<TeamMemberRegister />}
//           />
//           <Route
//             path="/app/team-info"
//             element={<TeamInfo />}
//           />
      
//       </Route>











//         {/*  -------- Admin Routes -------- */}

//         <Route path="/admin" element={<AdminLogin />} />


//         <Route path="/admin/app" element={<AdminLayout />}>
//            {/* Protected User Home page Route */}
//             <Route
//               path="/admin/app/dashboard"
//               element={isAuthenticated ? 
//               <AdminDashboard /> : 
//               <Navigate to="/admin" />}
//             />
//             <Route path="/admin/app/announcement" element={<AdminAnnouncement />} />
//             <Route path="/admin/app/user-types" element={<AddUserType />} />
//             {/* <Route path="profile" element={<Profile />} /> */}
//         </Route>
       

//         {/* Default Redirect (Optional) */}
//         {/* <Route path="*" element={<Navigate to="/admin/login" />} /> */}
//       </Routes>
//   );
// };

// export default AppRouter;





import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";

import Home from "../Pages/home/Home";
import TeamMemberRegister from "../Pages/teamLeader/TeamMemberRegister";
import TeamInfo from "../Pages/teamLeader/TeamInfo";
import MainLayout from "../Pages/layouts/MainLayout";

import AdminLogin from "../Admin/AdminComponents/AdminLogin";
import AdminLayout from "../Admin/AdminPages/AdminLayout/AdminLayout";
import AdminDashboard from "../Admin/AdminPages/adminDashboard/AdminDashboard";
import AdminAnnouncement from "../Admin/AdminPages/adminAnnouncement/AdminAnnouncement";
import AddUserType from "../Admin/AdminPages/userRoles/AddUserType";

import ProtectedRoute from "./ProtectedRoute";
import { AppRoutes } from "./AppRoutes";
import RegisterTeamMember from "../Pages/teamLeader/registerTeamMember/RegisterTeamMember";

const CustomRoutes = () => {
  return (
    
      <Routes>
        {/* Redirect base route to login */}
        <Route path="/" element={<Navigate to={AppRoutes.LOGIN} />} />

        {/* ----------- Public Routes ----------- */}
        <Route path={AppRoutes.LOGIN} element={<Login />} />
        <Route path={AppRoutes.REGISTER} element={<Register />} />
        <Route path={AppRoutes.ADMIN_LOGIN} element={<AdminLogin />} />

        {/* ----------- Protected User Routes ----------- */}
        {/* <Route element={<ProtectedRoute allowedRole="user" />}> */}
          <Route path={AppRoutes.USER_BASE} element={<MainLayout />}>
            <Route path={AppRoutes.USER_HOME} element={<Home />} />
            {/* <Route path={AppRoutes.TEAM_MEMBER_REGISTER} element={<TeamMemberRegister />} /> */}
            <Route path={AppRoutes.TEAM_MEMBER_REGISTER} element={<RegisterTeamMember />} />
            <Route path={AppRoutes.TEAM_INFO} element={<TeamInfo />} />
          </Route>
        {/* </Route> */}

        {/* ----------- Protected Admin Routes ----------- */}
        {/* <Route element={<ProtectedRoute allowedRole="admin" />}> */}
          <Route path={AppRoutes.ADMIN_BASE} element={<AdminLayout />}>
            <Route path={AppRoutes.ADMIN_DASHBOARD} element={<AdminDashboard />} />
            <Route path={AppRoutes.ADMIN_ANNOUNCEMENT} element={<AdminAnnouncement />} />
            <Route path={AppRoutes.ADMIN_USER_TYPES} element={<AddUserType />} />
          </Route>
        {/* </Route> */}

        {/* ----------- Fallback Route ----------- */}
        <Route path="*" element={<Navigate to={AppRoutes.LOGIN} />} />
      </Routes>
    
  );
};

export default CustomRoutes;
