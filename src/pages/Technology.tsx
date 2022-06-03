import React, { FC } from "react";
import { useEffect } from "react";

import Slider from "../components/slider";
import { fetchTechnology } from "../store/actions";
import { useTypeDispatch, useTypeSelector } from "../hooks/redux_hook";

const Technology: FC = () => {
  const dispatch = useTypeDispatch();
  const { data, loading } = useTypeSelector((state) => state.technologyReducer);

  useEffect(() => {
    !data.length && dispatch(fetchTechnology());
    !data.length && console.log(data);
  }, []);

  return (
    <div>
      {!loading ? <Slider slids={data.map((item) => item.name)} /> : "loading"}
    </div>
  );
};

export default Technology;
