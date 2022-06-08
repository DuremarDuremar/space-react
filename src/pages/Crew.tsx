import React, { FC } from "react";
import { useEffect } from "react";

import Slider from "../components/slider";
import { fetchCrew } from "../store/actions";
import { useTypeDispatch, useTypeSelector } from "../hooks/redux_hook";

import { Content } from "../styles/crew_style";

const Crew: FC = () => {
  const dispatch = useTypeDispatch();
  const { data, loading } = useTypeSelector((state) => state.crewReducer);

  useEffect(() => {
    !data.length && dispatch(fetchCrew());
  }, []);

  const title = "02 MEET YOUR CREW";

  return (
    <Content>
      {!loading ? (
        <Slider
          slids={data.map((item) => item)}
          title={title}
          typeSlider={"crew"}
        />
      ) : (
        "loading"
      )}
    </Content>
  );
};

export default Crew;
