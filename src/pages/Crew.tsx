import React from "react";
import { useEffect } from "react";

import Slider from "../components/slider";
import { fetchCrew } from "../store/actions";
import { useTypeDispatch, useTypeSelector } from "../hooks/redux_hook";

const Crew = () => {
  const dispatch = useTypeDispatch();
  const { data, loading } = useTypeSelector((state) => state.crewReducer);

  useEffect(() => {
    !data.length && dispatch(fetchCrew());
    !data.length && console.log(data);
  }, []);

  return (
    <div>
      {!loading ? <Slider slids={data.map((item) => item.name)} /> : "loading"}
    </div>
  );
};

export default Crew;
