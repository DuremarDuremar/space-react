import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="destination">destination</NavLink>
          </li>
          <li>
            <NavLink to="crew">crew</NavLink>
          </li>
          <li>
            <NavLink to="technology">technology</NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
