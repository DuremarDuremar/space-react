import React from "react";
import { Outlet } from "react-router-dom";

import { Header, NavBar, NLink } from "../styles/layout_style";

const Layout = () => {
  return (
    <>
      <Header>
        <NavBar>
          <li>
            <NLink to="/">00 home</NLink>
          </li>
          <li>
            <NLink to="destination">01 destination</NLink>
          </li>
          <li>
            <NLink to="crew">02 crew</NLink>
          </li>
          <li>
            <NLink to="technology">03 technology</NLink>
          </li>
        </NavBar>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
