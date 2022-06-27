import styled from "styled-components";
import { respon } from "../variables";

import backgroundDesktop from "../assets/crew/background-crew-desktop.jpg";
export const Content = styled.div`
  background: url(${backgroundDesktop}) center center fixed;
  min-height: 100vh;
  background-size: cover;
  @media ${respon.Max729} {
    background-size: contain;
  }
`;
