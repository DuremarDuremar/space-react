import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Layout from "./components/layout";

import { Global, Content } from "./styles/app_style";

const App = () => {
  console.log("app");

  return (
    <>
      <Global />
      <Content>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Technology />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Content>
    </>
  );
};

export default App;
