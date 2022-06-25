import React, { FC, useEffect } from "react";
import { SpinnerDotted } from "spinners-react";

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
  }, [data, dispatch]);

  return (
    <Content>
      {!loading ? (
        <>
          <h3>01 PICK YOUR dESTINATION</h3>
          <Slider slids={data.map((item) => item)} typeSlider={"destination"} />
        </>
      ) : (
        <div className="spinner">
          <SpinnerDotted size={100} thickness={100} speed={100} color="#fff" />
        </div>
      )}
    </Content>
  );
};

export default Destination;
