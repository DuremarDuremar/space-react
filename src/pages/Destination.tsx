import React, { FC } from "react";
import { useEffect } from "react";

import Slider from "../components/slider";
import { fetchDestination } from "../store/actions";
import { useTypeDispatch, useTypeSelector } from "../hooks/redux_hook";

import { Content } from "../styles/destination_style";

const Destination: FC = () => {
  const dispatch = useTypeDispatch();
  const { data, loading } = useTypeSelector(
    (state) => state.destinationReducer
  );

  useEffect(() => {
    !data.length && dispatch(fetchDestination());
  }, []);

  return (
    <Content>
      <h3>01 PICK YOUR dESTINATION</h3>
      {!loading ? (
        <Slider slids={data.map((item) => item)} typeSlider={"destination"} />
      ) : (
        "loading"
      )}
    </Content>
  );
};

export default Destination;
