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

  console.log(typeSlider);

  return (
    <WrapperSlider {...settings} typeSlider={typeSlider}>
      {slids.map((item: any) => (
        <ItemSlider key={item.name} typeSlider={typeSlider}>
          <Img>
            {item.images.webp && <img src={item.images.webp} alt={item.name} />}
          </Img>
          <Text>
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
