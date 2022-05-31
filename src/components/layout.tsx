import React from "react";
import { Outlet } from "react-router-dom";

import { Header, NavBar, NLink } from "../styles/layout_style";

const Layout = () => {
  return (
    <>
      <Header>
        <NavBar>
          <li>
            <NLink to="/">home</NLink>
          </li>
          <li>
            <NLink to="destination">destination</NLink>
          </li>
          <li>
            <NLink to="crew">crew</NLink>
          </li>
          <li>
            <NLink to="technology">technology</NLink>
          </li>
        </NavBar>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
