import React, { FC } from "react";
import { WrapperSlider, ItemSlider, Img, Text } from "../styles/slider_style";

interface IProps {
  slids: any;
  typeSlider: string;
}

const Slider: FC<IProps> = ({ slids, typeSlider }) => {
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
          width:
            typeSlider === "destination"
              ? "100%"
              : typeSlider === "crew"
              ? "14px"
              : "50px",
          height: typeSlider === "technology" ? "50px" : "14px",
          borderRadius: "50%",
          backgroundColor: typeSlider === "crew" ? "#7d7e83" : "transparent",
          textAlign: "center",
          border: typeSlider === "technology" ? "1px solid #7d7e83" : "none",
        }}
      >
        {typeSlider === "destination"
          ? dotsItems[i]
          : typeSlider === "technology"
          ? i + 1
          : null}
      </div>
    ),
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  console.log(typeSlider);

  return (
    <WrapperSlider {...settings} typeSlider={typeSlider}>
      {slids.map((item: any) => (
        <ItemSlider key={item.name} typeSlider={typeSlider}>
          <Img typeSlider={typeSlider}>
            {
              <img
                src={item.images.webp || item.images.portrait}
                alt={item.name}
              />
            }
          </Img>
          <Text typeSlider={typeSlider}>
            {typeSlider === "technology" && <h5>THE TERMINOLOGY...</h5>}
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
          </Text>
        </ItemSlider>
      ))}
    </WrapperSlider>
  );
};

export default Slider;
