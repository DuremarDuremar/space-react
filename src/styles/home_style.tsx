import styled from "styled-components";

import backgroundDesktop from "../assets/home/background-home-desktop.jpg";
export const Content = styled.div`
  background: url(${backgroundDesktop}) center center fixed;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 220px;
  padding: 0 8vw;
  margin-bottom: -200px;
`;

export const ContainerLeft = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h5 {
    color: #7d7e83;
    font-size: 1.5vw;
    font-weight: 400;
  }
  article {
    color: #7d7e83;
    width: 75%;
  }
  h1 {
    font-size: 6vw;
    font-weight: 300;
  }
`;

export const ContainerRight = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    color: #7d7e83;
    background-color: #ffffff;
    padding: 70px 40px;
    border-radius: 50%;
  }
`;
