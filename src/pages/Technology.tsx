import React, { FC } from "react";
import { useEffect } from "react";

import Slider from "../components/slider";
import { fetchTechnology } from "../store/actions";
import { useTypeDispatch, useTypeSelector } from "../hooks/redux_hook";

import { Content } from "../styles/technology_style";

const Technology: FC = () => {
  const dispatch = useTypeDispatch();
  const { data, loading } = useTypeSelector((state) => state.technologyReducer);

  useEffect(() => {
    !data.length && dispatch(fetchTechnology());
    !data.length && console.log(data);
  }, []);

  return (
    <Content>
      <h3>03 SPACE LAUNCH 101</h3>
      {!loading ? (
        <Slider slids={data.map((item) => item)} typeSlider={"technology"} />
      ) : (
        "loading"
      )}
    </Content>
  );
};

export default Technology;
