import { useState } from "react";
import { NavLink } from "react-router-dom";
import UpgradeCard from "./cards/UpgradeCard";

function Navbar() {
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { to: "/", label: "Dashboard", icon: "home" },
    { to: "/marketplace", label: "NFT Market Place", icon: "shopping_cart" },
    { to: "/tables", label: "Tables", icon: "grouped_bar_chart" },
    { to: "/kanban", label: "Kanban", icon: "dashboard" },
    { to: "/profile", label: "Profile", icon: "person" },
  ];

  return (
    <nav className="h-[1152px] w-64 bg-white flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center text-3xl border-b border-light px-6 py-10">
        <h2 className="flex items-center gap-1 text-primary">
          <span className="font-bold">HORIZON</span>
          <span className="text-2xl font-normal">FREE</span>
        </h2>
      </div>

      <div className="flex flex-col justify-between gap-10 py-10 h-full">
        {/* Navigation Items */}
        <div className="flex flex-col gap-6 text-sm font-medium pl-6">
          {navItems.map(({ to, label, icon }) => (
            <NavLink key={to} to={to}>
              {({ isActive }) => {
                const isThisHovered = hovered === to;
                const isAnyHovered = hovered !== null;

                const showHighlight = isThisHovered || (!isAnyHovered && isActive);

                const iconColor = showHighlight
                  ? "text-blue-primary"
                  : "text-secondary-gray";
                const labelColor = showHighlight
                  ? "text-primary"
                  : "text-secondary-gray";

                return (
                  <div
                    className="relative group flex items-center gap-3 px-2 py-1 rounded-md cursor-pointer transition-colors duration-300 ease-in-out"
                    onMouseEnter={() => setHovered(to)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Animated right blue line */}
                    <div
                      className={`absolute right-0 h-full w-1 rounded-l rounded-r bg-blue-primary transform transition-all duration-300 origin-right ${
                        showHighlight ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                      }`}
                    />

                    <span
                      className={`material-symbols-outlined nav-item-icon text-lg transition-colors duration-300 ease-in-out ${iconColor}`}
                    >
                      {icon}
                    </span>
                    <span
                      className={`nav-item-info text-sm font-medium transition-colors duration-300 ease-in-out ${labelColor}`}
                    >
                      {label}
                    </span>
                  </div>
                );
              }}
            </NavLink>
          ))}
        </div>

        {/* Bottom Upgrade Card */}
        <div>
          <UpgradeCard />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
