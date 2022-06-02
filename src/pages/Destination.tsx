import React from "react";
import { useEffect } from "react";

import Slider from "../components/slider";
import { fetchDestination } from "../store/actions";
import { useTypeDispatch, useTypeSelector } from "../hooks/redux_hook";

const Destination = () => {
  const dispatch = useTypeDispatch();
  const { data, loading } = useTypeSelector(
    (state) => state.destinationReducer
  );

  console.log(loading);

  useEffect(() => {
    !data.length && dispatch(fetchDestination());
    !data.length && console.log(data);
  }, []);

  return (
    <div>
      {!loading ? <Slider slids={data.map((item) => item.name)} /> : "loading"}
    </div>
  );
};

export default Destination;
