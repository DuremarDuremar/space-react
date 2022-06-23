import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";

import Inputs from "./inputs";
import logo from "../assets/shared/logo.svg";
import {
  Header,
  Logo,
  NavBar,
  NLink,
  Button,
  WrapperButton,
} from "../styles/layout_style";

console.log("layout");

const Layout: FC = () => {
  const [user, setUser] = useState(true);
  console.log("user", user);

  return (
    <>
      <Header>
        <Logo>
          <img src={logo} alt="logo" />
          <div>
            <WrapperButton>
              <Button onClick={() => setUser(!user)}>
                {user ? "SignUp" : "SignIn"}
              </Button>
            </WrapperButton>
            <Inputs user={user} />
          </div>
        </Logo>

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
