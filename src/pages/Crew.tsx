import React, { FC, useEffect } from "react";
import { SpinnerDotted } from "spinners-react";

import Slider from "../components/slider";
import { fetchCrew } from "../store/actions";
import { useTypeDispatch, useTypeSelector } from "../hooks/redux_hook";

import { Content } from "../styles/crew_style";

const Crew: FC = () => {
  const dispatch = useTypeDispatch();
  const { data, loading } = useTypeSelector((state) => state.crewReducer);

  useEffect(() => {
    !data.length && dispatch(fetchCrew());
  }, [data, dispatch]);

  return (
    <Content>
      {!loading ? (
        <>
          <h3>02 MEET YOUR CREW</h3>
          <Slider slids={data.map((item) => item)} typeSlider={"crew"} />
        </>
      ) : (
        <div className="spinner">
          <SpinnerDotted size={100} thickness={100} speed={100} color="#fff" />
        </div>
      )}
    </Content>
  );
};

export default Crew;
