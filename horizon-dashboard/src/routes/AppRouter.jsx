import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from './PublicRoute';

import AuthLayout from '@layouts/AuthLayout';
import DashboardLayout from '@layouts/DashboardLayout';

import Login from '@pages/auth/Login';
import DashboardHome from '@pages/dashboard/DashboardHome';
import Kanban from '@pages/dashboard/Kanban';
import NftMarket from "@pages/dashboard/NFTMarketplace";
import Profile from "@pages/dashboard/Profile";
import Tables from "@pages/dashboard/Tables";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/marketplace" element={<NftMarket />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tables" element={<Tables />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
