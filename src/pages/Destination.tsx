import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Slider from "../components/slider";
import { fetchDestination } from "../store/actions";
import { useTypeDispatch, useTypeSelector } from "../hooks/redux_hook";

const Destination = () => {
  const [planets, setPlanets] = useState(["mars", "neptun", "upiter", "uran"]);
  const [opt, setOpt] = useState(0);

  const dispatch = useTypeDispatch();
  const { data, loading } = useTypeSelector(
    (state) => state.destinationReducer
  );

  useEffect(() => {
    dispatch(fetchDestination("destinations"));
  }, []);

  console.log(data);

  return (
    <div>
      {data.length ? (
        <Slider slids={data.map((item) => item.name)} />
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Destination;
