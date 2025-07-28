import { Outlet } from 'react-router-dom';
import Footer from '@components/Footer';
import DarkMoodeToggle from '../components/DarkMoodeToggle';
function AuthLayout() {
  return (
    <div className="flex flex-col min-h-screen">
  <main className="flex-grow">
    <Outlet />
  </main>
  <Footer />
  <DarkMoodeToggle/>
    </div>

  );
}

export default AuthLayout;
