import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Slider from "../components/slider";

const Destination = () => {
  const [planets, setPlanets] = useState(["mars", "neptun", "upiter", "uran"]);
  const [opt, setOpt] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/destinations")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Slider slids={planets} />
    </div>
  );
};

export default Destination;
