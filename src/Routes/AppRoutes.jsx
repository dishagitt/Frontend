import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "../Admin/AdminComponents/AdminLogin";
import Login from "../Pages/auth/login";
import Home from "../Pages/home/home";
import Register from "../Pages/auth/Register";
import MainLayout from "../Pages/layouts/MainLayout";
import AdminLayout from "../Admin/AdminPages/AdminLayout/AdminLayout";
import AdminDashboard from "../Admin/AdminPages/adminDashboard/AdminDashboard";

const AppRouter = () => {
  const isAuthenticated = localStorage.getItem("isAdminAuthenticated") === "true";

  return (
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        {/*  -------- User Routes -------- */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

       {/* Routes that use MainLayout (With Sidebar/Navbar/Footer) */}
       <Route path="/app" element={<MainLayout />}>
           {/* Protected User Home page Route */}
        <Route
          path="/app/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>







        {/*  -------- Admin Routes -------- */}

        <Route path="/admin" element={<AdminLogin />} />


        <Route path="/admin/app" element={<AdminLayout />}>
           {/* Protected User Home page Route */}
        <Route
          path="/admin/app/dashboard"
          element={isAuthenticated ? 
          <AdminDashboard /> : 
          <Navigate to="/admin" />}
        />
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>

        {/* Default Redirect (Optional) */}
        {/* <Route path="*" element={<Navigate to="/admin/login" />} /> */}
      </Routes>
  );
};

export default AppRouter;
