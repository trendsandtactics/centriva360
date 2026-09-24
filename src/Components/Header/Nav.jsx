import React from 'react';
import { NavLink, useLocation } from "react-router";

export default function Nav({ setMobileToggle, linkColor, isMobile }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNavClick = (anchorId) => {
    if (setMobileToggle) {
      setMobileToggle(false);
    }
    if (isHome && anchorId) {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: "Home", to: "/", anchor: "hero" },
    { label: "About", to: "/about", anchor: "about" },
    { label: "Values", to: "/values", anchor: "values" },
    { label: "Capabilities", to: "/capabilities", anchor: "capabilities" },
    { label: "The Advantage", to: "/the-advantage", anchor: "advantage" },
    { label: "Contact", to: "/contact", anchor: "contact" },
  ];

  if (isMobile) {
    return (
      <ul className="nexora-mobile-nav-list list-unstyled mb-0">
        {navItems.map((item) => (
          <li key={item.to} className="nexora-mobile-nav-item">
            <NavLink
              to={item.to}
              onClick={() => handleNavClick(item.anchor)}
              className={({ isActive }) =>
                `nexora-mobile-nav-link d-flex align-items-center justify-content-between ${
                  isActive ? 'active' : ''
                }`
              }
            >
              <span>{item.label}</span>
              <i className="bi bi-chevron-right mobile-nav-arrow"></i>
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="cs_nav_list fw-medium d-flex align-items-center list-unstyled mb-0">
      {navItems.map((item) => (
        <li key={item.to} className="position-relative">
          <NavLink
            to={item.to}
            onClick={() => handleNavClick(item.anchor)}
            style={({ isActive }) => ({
              color: isActive ? '#FF5722' : (linkColor || '#0F172A'),
              fontWeight: isActive ? '700' : '600',
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              padding: '6px 0',
              position: 'relative'
            })}
            className={({ isActive }) => (isActive ? 'active-nav-link' : '')}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
