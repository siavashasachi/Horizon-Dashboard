import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <footer
      className={`absolute bottom-0  w-full justify-between px-4 py-4 flex flex-col md:flex-row items-center text-secondary-gray 
        ${isLogin ? 'justify-around' : 'justify-between'}`}
    >
      <span>
        © {new Date().getFullYear()} Horizon UI. All Rights Reserved. Made with love by Simmmple!
      </span>
      <div className={`flex gap-4 mt-2 md:mt-0   ${isLogin ? 'lg:text-white' : 'text-secondary-gray'}`}>
        <a href="#" className="hover:underline">Marketplace</a>
        <a href="#" className="hover:underline">License</a>
        <a href="#" className="hover:underline">Terms of Use</a>
        <a href="#" className="hover:underline">Blog</a>
      </div>
    </footer>
  );
}

export default Footer;


