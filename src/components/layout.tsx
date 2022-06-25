import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTypeSelector, useTypeDispatch } from "../hooks/redux_hook";

import Inputs from "./inputs";
import { userSlice } from "../store/reducers/user_reducer";
import logo from "../assets/shared/logo.svg";
import {
  Header,
  Logo,
  NavBar,
  NLink,
  Button,
  WrapperButton,
  Name,
} from "../styles/layout_style";

const Layout: FC = () => {
  const [user, setUser] = useState(true);
  const dispatch = useTypeDispatch();
  const { name, id } = useTypeSelector((state) => state.userReducer);

  return (
    <>
      <Header>
        <Logo value={id}>
          <img src={logo} alt="logo" />
          <div>
            <WrapperButton value={id}>
              {id ? (
                <Button
                  onClick={() => dispatch(userSlice.actions.removeUser())}
                >
                  exit
                </Button>
              ) : (
                <Button onClick={() => setUser(!user)}>
                  {user ? "SignUp" : "SignIn"}
                </Button>
              )}
            </WrapperButton>
            {id ? <Name>Hello, {name} !</Name> : <Inputs user={user} />}
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
