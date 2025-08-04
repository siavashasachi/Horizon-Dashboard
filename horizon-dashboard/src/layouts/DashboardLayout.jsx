import { Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import BreadCrumb from '@components/Breadcrumbs';
import ToolBar from '../components/ToolBar';
function DashboardLayout() {
  return (
    <div className=" min-h-screen">
      <div className="flex ">
        <Navbar />
        <main className="w-full relative  pt-10">
          <div className='main-header flex flex-row justify-between '>
            <BreadCrumb/>
            <ToolBar/>
          </div>
          <Outlet />
          <Footer />
        </main>
        
      </div>
    </div>
  );
}

export default DashboardLayout;
