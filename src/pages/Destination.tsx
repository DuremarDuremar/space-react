import React from "react";
import { useState } from "react";

import { WrapperSlider } from "../styles/destination_style";

const Destination = () => {
  const [planets, setPlanets] = useState(["mars", "neptun", "upiter", "uran"]);
  const [opt, setOpt] = useState(0);

  const settings = {
    className: "",
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div>
      <WrapperSlider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </WrapperSlider>
    </div>
  );
};

export default Destination;
