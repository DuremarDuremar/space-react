import React, { FC } from "react";
import { WrapperSlider, ItemSlider, Left, Right } from "../styles/slider_style";

interface IProps {
  slids: any;
  title: string;
  typeSlider?: string;
}

const Slider: FC<IProps> = ({ slids, title, typeSlider }) => {
  const dotsItems = slids.map((item: any) => item.name);

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
          width: typeSlider === "destination" ? "80px" : "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor:
            typeSlider !== "destination" ? "#fff" : "transparent",
        }}
      >
        {typeSlider === "destination" ? dotsItems[i] : null}
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
    <WrapperSlider {...settings}>
      {slids.map((item: any) => (
        <ItemSlider key={item.name}>
          <Left>
            <h3>{title}</h3>
            {item.images.webp && <img src={item.images.webp} alt={item.name} />}
          </Left>
          <Right>
            {item.role && <h4>{item.role}</h4>}
            <h2> {item.name}</h2>
            <article>{item.description || item.bio}</article>
            {item.distance && item.travel && (
              <ul>
                <li>avg.distance</li>
                <li>est.travel time</li>
                <li>{item.distance}</li>
                <li>{item.travel}</li>
              </ul>
            )}
          </Right>
        </ItemSlider>
      ))}
    </WrapperSlider>
  );
};

export default Slider;
