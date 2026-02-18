// src/routes/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Sites from "../pages/Sites";
import SiteDetail from "../pages/SiteDetail";
import Optimization from "../pages/Optimization";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

export default function AppRouter() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="sites" element={<Sites />} />
        <Route path="sites/:id" element={<SiteDetail />} />
        <Route path="optimization" element={<Optimization />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
