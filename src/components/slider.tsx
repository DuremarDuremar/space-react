import React, { FC } from "react";
import { WrapperSlider } from "../styles/slider_style";

interface IProps {
  slids: string[];
}

const Slider: FC<IProps> = ({ slids }) => {
  const dotsItems = ["MOON", "MARS", "EUROPA", "TITAN"];

  const settings = {
    className: "",
    arrows: false,
    dots: true,
    appendDots: (dots: any) => (
      <div
        style={
          {
            // backgroundColor: "#ddd",
            // borderRadius: "10px",
            // padding: "10px",
          }
        }
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          width: "80px",
          color: "blue",
          // border: "1px blue solid",
        }}
      >
        {dotsItems[i]}
      </div>
    ),
    fade: true,
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
