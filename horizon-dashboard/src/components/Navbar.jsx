import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UpgradeCard from "./cards/UpgradeCard";

function Navbar() {
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const itemRefs = useRef({});

  const navItems = [
    { to: "/", label: "Dashboard", icon: "home" },
    { to: "/marketplace", label: "NFT Market Place", icon: "shopping_cart" },
    { to: "/tables", label: "Tables", icon: "grouped_bar_chart" },
    { to: "/kanban", label: "Kanban", icon: "dashboard" },
    { to: "/profile", label: "Profile", icon: "person" },
  ];

  const updateIndicator = (to) => {
    const el = itemRefs.current[to];
    if (el) setIndicatorTop(el.offsetTop);
  };

  useEffect(() => {
    const current = navItems.find(({ to }) => window.location.pathname === to);
    if (current) updateIndicator(current.to);
  }, []);

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
        {/* Nav Items */}
        <div className="flex flex-col  text-sm font-medium pl-6 relative">
          {/* Moving Indicator Line */}
          <div
            className="absolute right-0 w-[3px] h-[30px] rounded-l bg-blue-primary transition-all duration-300"
            style={{ top: indicatorTop }}
          />

          {navItems.map(({ to, label, icon }) => (
            <NavLink key={to} to={to}>
              {({ isActive }) => {
                const isHovered = hoveredItem !== null;
                const isThisHovered = hoveredItem === to;

                const showActiveStyle = isActive && (!isHovered || isThisHovered);

                const iconColor = showActiveStyle
                  ? "text-blue-primary"
                  : "text-secondary-gray";

                const labelColor = showActiveStyle
                  ? "text-primary"
                  : "text-secondary-gray";

                return (
                  <div
                    ref={(el) => (itemRefs.current[to] = el)}
                    onMouseEnter={() => {
                      updateIndicator(to);
                      setHoveredItem(to);
                    }}
                    onMouseLeave={() => {
                      const current = navItems.find(({ to }) => window.location.pathname === to);
                      if (current) updateIndicator(current.to);
                      setHoveredItem(null);
                    }}
                    className="group flex items-center gap-3 px-2 py-3 rounded-md cursor-pointer transition-colors duration-300 ease-in-out"
                  >
                    <span
                      className={`material-symbols-outlined text-lg transition-colors ${iconColor} group-hover:text-blue-primary`}
                    >
                      {icon}
                    </span>
                    <span
                      className={`text-sm font-medium transition-colors ${labelColor} group-hover:text-primary`}
                    >
                      {label}
                    </span>
                  </div>
                );
              }}
            </NavLink>
          ))}
        </div>

        {/* Upgrade Section */}
        <div>
          <UpgradeCard />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
