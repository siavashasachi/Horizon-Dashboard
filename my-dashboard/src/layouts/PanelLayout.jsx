import { Outlet } from "react-router-dom";
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import BreadCrumb from '@components/BreadCrumb';
import SideBar from '@components/SideBar';
function PanelLayout(){
    return(
        <main className="flex w-full">
            <Navbar/>
            <div className="flex flex-col w-full"> 
                <div className="flex justify-between items-center">
                    <BreadCrumb/>
                    <SideBar/>
                </div>
                <Outlet/>
                <Footer/>
            </div>

        </main>
    )
}
export default PanelLayout