import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-screen w-64 bg-white shadow-sm flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center text-3xl border-b border-light px-6 py-10">
        <h2 className="flex items-center gap-1 text-primary">
          <span className="font-bold">HORIZON</span>
          <span className="text-2xl font-normal">FREE</span>
        </h2>
      </div>

      {/* Nav Items */}
      <div className="mt-12 flex flex-col gap-6 text-sm font-medium pl-6">
        {[
          { to: "/", label: "Dashboard", icon: "home" },
          { to: "/marketplace", label: "NFT Market Place", icon: "shopping_cart" },
          { to: "/tables", label: "Tables", icon: "grouped_bar_chart" },
          { to: "/kanban", label: "Kanban", icon: "dashboard" },
          { to: "/profile", label: "Profile", icon: "person" },
        ].map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className="group flex items-center gap-3 px-2 py-1 rounded-md transition"
          >
            {({ isActive }) => (
              <>
                <span
                  className={`material-symbols-outlined nav-item-icon text-lg transition group-hover:text-blue-primary ${
                    isActive ? "text-blue-primary" : "text-secondary-gray"
                  }`}
                >
                  {icon}
                </span>
                <span
                  className={`nav-item-info text-sm font-medium transition group-hover:text-primary ${
                    isActive ? "text-primary" : "text-secondary-gray"
                  }`}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
