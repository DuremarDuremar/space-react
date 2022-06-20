import React, { FC } from "react";
import { useEffect } from "react";
import { SpinnerDotted } from "spinners-react";

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
  }, [data, dispatch]);

  return (
    <Content>
      {!loading ? (
        <>
          <h3>03 SPACE LAUNCH 101</h3>
          <Slider slids={data.map((item) => item)} typeSlider={"technology"} />
        </>
      ) : (
        <div className="spinner">
          <SpinnerDotted size={100} thickness={100} speed={100} color="#fff" />
        </div>
      )}
    </Content>
  );
};

export default Technology;
