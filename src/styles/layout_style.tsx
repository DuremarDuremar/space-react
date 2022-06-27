import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { respon } from "../variables";

export const Header = styled.header`
  right: 0;
  position: absolute;
  width: 100%;
  z-index: 3;
  .dec {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    @media ${respon.Max1200} {
      margin-top: 0;
    }
    @media ${respon.Max729} {
      display: block;
    }
  }
`;

export const Logo = styled.div`
  padding-left: 2vw;
  position: relative;
  /* width: 48%; */
  display: flex;
  align-items: center;
  @media ${respon.Max729} {
    display: block;
    text-align: center;

    img {
      width: 40px;
    }
  }

  &:after {
    content: "";
    display: block;
    width: 87%;
    height: 1px;
    background-color: #7d7e83;
    position: absolute;
    top: 50%;
    left: 9vw;
    @media ${respon.Max1200} {
      display: none;
    }
  }

  /* > div {
    
  } */
`;

export const WrapperReg = styled.div<{
  value: string | null;
}>`
  padding-left: 3vw;
  display: flex;
  flex-direction: ${(props) => (props.value ? "column-reverse" : "column")};

  @media ${respon.Max1200} {
    flex-direction: row;
    padding-top: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  color: #fff;
  justify-content: center;
  width: 540px;

  @media ${respon.Max729} {
    width: auto;
    flex-wrap: wrap;
  }

  div {
    position: relative;
  }
  input {
    background-color: #fff;
    border: 2px solid #7d7e83;
    padding-left: 14px;
    max-width: 140px;
  }
  button {
    border-radius: 20%;
    height: 30px;
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
  max-width: 540px;
  width: 100%;
`;

export const NavBar = styled.ul`
  display: flex;
  height: 70px;
  width: 52%;
  background-color: rgb(141, 160, 153, 0.1);
  padding: 0 40px 0 25px;
  align-items: center;
  justify-content: space-around;

  @media ${respon.Max1200} {
    width: 77%;
    height: 60px;
  }
  @media ${respon.Max729} {
    width: 100%;
    padding: 0 5px;
  }
`;

export const NLink = styled(NavLink)`
  color: #fff;
  @media ${respon.Max729} {
    font-size: 14px;
  }
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
  justify-content: center;
  width: 100%;
  @media ${respon.Max1200} {
    width: auto;
    padding: 0 0 15px 0;
  }
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
