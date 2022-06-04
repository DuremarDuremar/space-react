import React, { FC } from "react";
import { WrapperSlider, ItemSlider, Left, Right } from "../styles/slider_style";

interface IProps {
  slids: any;
  title: string;
}

const Slider: FC<IProps> = ({ slids, title }) => {
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
    <WrapperSlider {...settings}>
      {slids.map((item: any) => (
        <ItemSlider key={item.name}>
          <Left>
            <h3>{title}</h3>
            {item.images.webp && <img src={item.images.webp} alt={item.name} />}
          </Left>
          <Right>
            <h4> {item.name}</h4>
            <article>
              {(item.description && item.description) || (item.bio && item.bio)}
            </article>
          </Right>
        </ItemSlider>
      ))}
    </WrapperSlider>
  );
};

export default Slider;
