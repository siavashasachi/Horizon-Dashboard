import { Routes,Route } from "react-router-dom";
import SignIn from '@pages/SignIn';
import Kanban from '@pages/Kanban';
import MainDashboard from '@pages/MainDashboard';
import NftMarket from '@pages/NftMarket';
import Profile from '@pages/Profile';
import Tables from '@pages/Tables';
import AuthLayout from '@layouts/AuthLayout';
import PanelLayout from '@layouts/PanelLayout';
function AppRouter(){
    return(
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path="/signin" element={<SignIn/>}/>
            </Route>
            <Route element={<PanelLayout/>}>
                <Route path="/dashboard" element={<MainDashboard/>}/>
                <Route path="/kanban" element={<Kanban/>}/>
                <Route path="/marketplace" element={<NftMarket/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/tables" element={<Tables/>}/>
            </Route>
        </Routes>
    )
}