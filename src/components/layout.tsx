import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTypeSelector, useTypeDispatch } from "../hooks/redux_hook";
import MediaQuery from "react-responsive";

import Inputs from "./inputs";
import { userSlice } from "../store/reducers/user_reducer";
import logo from "../assets/shared/logo.svg";
import {
  Header,
  Logo,
  NavBar,
  NLink,
  Button,
  WrapperReg,
  WrapperButton,
  Name,
} from "../styles/layout_style";

const Layout: FC = () => {
  const [user, setUser] = useState(true);
  const dispatch = useTypeDispatch();
  const { name, id } = useTypeSelector((state) => state.userReducer);

  const [adapForm, setAdapForm] = useState(false);
  const [adapNav, setAdapNav] = useState(false);

  const headerForm = () => {
    return (
      <WrapperReg value={id}>
        <WrapperButton value={id}>
          {id ? (
            <Button onClick={() => dispatch(userSlice.actions.removeUser())}>
              Exit
            </Button>
          ) : (
            <Button onClick={() => setUser(!user)}>
              {user ? "SignUp" : "SignIn"}
            </Button>
          )}
        </WrapperButton>
        {id ? <Name>Hello, {name} !</Name> : <Inputs user={user} />}
      </WrapperReg>
    );
  };

  return (
    <>
      <Header>
        <MediaQuery maxWidth={1200}>{headerForm()}</MediaQuery>
        <div className="dec">
          <Logo>
            <img src={logo} alt="logo" />
            <MediaQuery minWidth={1200}>{headerForm()}</MediaQuery>
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
        </div>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
