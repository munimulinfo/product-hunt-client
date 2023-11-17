import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-[#033eef]" : "text-white")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;