import { NAV } from "@/utils/nav-config";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

// const navList = [
//   { to: "/", label: "Home" },
//   { to: "about", label: "About" },
//   { to: "auth/login", label: "Login" },
//   { to: "auth/register", label: "Register" },
//   { to: "concerts", label: "Concerts" },
//   { to: "concerts/trending", label: "Trending" },
// ];

function GlobalNav() {
  // const navList = extractNavItems(routes.routes);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      // ...내부로직은 mount된 이후에 사용가능
    }
  });

  return (
    <header style={{ padding: 8, borderBottom: "1px solid #eee" }}>
      <nav style={{ display: "flex", gap: 12 }}>
        {NAV.map(({ to, label }) => (
          <NavLink key={to} to={to}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
export default GlobalNav;
