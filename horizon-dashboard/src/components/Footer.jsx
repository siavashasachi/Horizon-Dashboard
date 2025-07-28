import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation(); // ✅ Move this INSIDE the component
  const isLogin = location.pathname === '/login';

  return (
    // it is wrritn for change classes on footerpage
    <footer
      className={`w-full px-4 py-4 flex flex-col md:flex-row items-center text-sm text-[var(--footer-text)] ${
    isLogin ? 'justify-around' : 'justify-between'
  }`}
    >
      <span>
        © {new Date().getFullYear()} Horizon UI. All Rights Reserved. Made with love by Simmmple!
      </span>
      <div className={`flex gap-4 mt-2 md:mt-0 ${isLogin ? 'text-white' : 'text-footer-text'}`}>
        <a href="#" className="hover:underline">Marketplace</a>
        <a href="#" className="hover:underline">License</a>
        <a href="#" className="hover:underline">Terms of Use</a>
        <a href="#" className="hover:underline">Blog</a>
      </div>
    </footer>
  );
}

export default Footer;

