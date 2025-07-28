import { useLocation } from 'react-router-dom';
const location=useLocation();
const isLogin = location.pathname === '/login';
function Footer() {
  return (

    <footer className={isLogin ? 'w-full px-4 py-4 flex flex-col md:flex-row items-center justify-around text-sm text-gray-500' : 'w-full px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500'}>
      <span>
        © {new Date().getFullYear()} Horizon UI. All Rights Reserved. Made with love by Simmmple!
      </span>
      <div className= {isLogin ? "flex gap-4 mt-2 md:mt-0 text-white" : "flex gap-4 mt-2 md:mt-0"}>
        <a href="#" className="hover:underline">Marketplace</a>
        <a href="#" className="hover:underline">License</a>
        <a href="#" className="hover:underline">Terms of Use</a>
        <a href="#" className="hover:underline">Blog</a>
      </div>
    </footer>
  );
}

export default Footer;
