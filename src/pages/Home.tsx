import React from "react";

import {
  Content,
  Wrapper,
  ContainerLeft,
  ContainerRight,
} from "../styles/home_style";

const Home = () => {
  return (
    <Content>
      <Wrapper>
        <ContainerLeft>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <article>
            Lets fase it: if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because wtll give you a truly out of this
            world experience!
          </article>
        </ContainerLeft>
        <ContainerRight>
          <h4>EXPLORE</h4>
        </ContainerRight>
      </Wrapper>
    </Content>
  );
};

export default Home;
