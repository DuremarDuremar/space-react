import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  right: 0;
  position: absolute;
  width: 100%;
`;

export const NavBar = styled.ul`
  display: flex;
  height: 70px;
  width: 55%;
  background-color: rgb(141, 160, 153, 0.1);
  padding: 0 40px 0 25px;
  align-items: center;
  justify-content: space-around;
`;

export const NLink = styled(NavLink)`
  color: #fff;
  &.active {
    color: black;
  }
`;
