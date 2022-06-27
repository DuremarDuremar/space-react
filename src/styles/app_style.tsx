import styled, { createGlobalStyle } from "styled-components";
import { respon } from "../variables";

export const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;
  user-select: none;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2f3542;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f9f9fd;
}
::-webkit-scrollbar-thumb {
    background-color: #0F2027;
}
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
  text-decoration: none;
}
ul li {
  list-style: none;
}
button {
  outline: none;
  cursor: pointer;
}
input{
  outline: none;
}
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
section::-webkit-scrollbar {
    height: 10px;
    background-color: #f9f9fd;
}
section::-webkit-scrollbar-thumb {
    background-color: #0F2027;
}
`;

export const Content = styled.div`
  max-width: 1366px;
  min-height: 100vh;
  margin: 0px auto;
  font-family: "Yatra One", cursive;
  position: relative;
  overflow: hidden;

  h3 {
    color: #fff;
    padding-top: 150px;
    padding-left: 100px;
    @media ${respon.Max729} {
      padding-top: 190px;
      font-size: 14px;
    }
  }
  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;
