import React, { FC } from "react";
import { WrapperSlider } from "../styles/slider_style";

interface IProps {
  slids: string[];
}

const Slider: FC<IProps> = ({ slids }) => {
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
        {slids.map((item: any) => (
          <div key={item}>{item}</div>
        ))}
      </WrapperSlider>
    </div>
  );
};

export default Slider;
