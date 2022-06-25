import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  right: 0;
  position: absolute;
  width: 100%;
  z-index: 3;
`;

export const Logo = styled.div<{
  value: string | null;
}>`
  padding-left: 2vw;
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;

  &:after {
    content: "";
    display: block;
    width: 87%;
    height: 1px;
    background-color: #7d7e83;
    position: absolute;
    top: 50%;
    left: 9vw;
  }

  > div {
    padding-left: 3vw;
    display: flex;
    flex-direction: ${(props) => (props.value ? "column-reverse" : "column")};
  }
`;

export const Form = styled.form`
  display: flex;
  color: #fff;
  justify-content: center;
  width: 540px;
  div {
    position: relative;
  }
  input {
    background-color: #fff;
    border: 2px solid #7d7e83;
    padding-left: 24px;
    max-width: 140px;
  }
  button {
    border-radius: 20%;
    i {
      border-radius: 20%;
      transition: all 0.7s ease-in-out;
      &:hover {
        color: #fff;
        background-color: #43cea2;
      }
    }
  }
  p {
    color: #7d7e83;
    font-size: 10px;
    position: absolute;
    top: 30px;
  }
`;

export const Name = styled.div`
  display: flex;
  color: #fff;
  justify-content: center;
  width: 540px;
`;

export const NavBar = styled.ul`
  display: flex;
  height: 70px;
  width: 52%;
  background-color: rgb(141, 160, 153, 0.1);
  padding: 0 40px 0 25px;
  align-items: center;
  justify-content: space-around;
`;

export const NLink = styled(NavLink)`
  color: #fff;
  &.active {
    position: relative;
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 4px;
      background-color: #fff;
      position: absolute;
      bottom: -24px;
    }
  }
`;

export const WrapperButton = styled.div<{
  value: string | null;
}>`
  display: flex;
  padding: ${(props) => (props.value ? "3vw 0 0 0" : "0 0 3vw 0")};
  /* padding-bottom: 3vw; */
  /* padding-left: 2vw; */
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #7d7e83;
  opacity: 0.5;
  width: 10vw;
  height: 25px;
  border-radius: 10px;
  transition: all 0.7s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
