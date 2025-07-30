import { Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import Footer from '@components/Footer';
function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-body">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-grow p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
