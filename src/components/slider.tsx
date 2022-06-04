import React, { FC } from "react";
import { WrapperSlider, ItemSlider, Left, Right } from "../styles/slider_style";

interface IProps {
  slids: any;
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

  console.log(slids);

  return (
    <div>
      <WrapperSlider {...settings}>
        {slids.map((item: any) => (
          <ItemSlider key={item.name}>
            <Left>
              {item.images.png && <img src={item.images.png} alt="344566778" />}
            </Left>
            <Right>{item.name}</Right>
          </ItemSlider>
        ))}
      </WrapperSlider>
    </div>
  );
};

export default Slider;
