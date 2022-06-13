import styled from "styled-components";
import Slider from "react-slick";

export const WrapperSlider = styled(Slider)<{
  typeSlider: string;
}>`
  position: relative;
  color: #fff;
  padding: ${(props) =>
    props.typeSlider === "technology" ? "20px 0 0 70px" : "20px 70px 0 70px"};
  max-height: 400px;

  .slick-slider {
  }

  .slick-slide {
  }
  .slick-list {
    display: flex;
  }

  .slick-track {
    display: flex;
  }
  .slick-dots {
    /* width: 100%; */
    padding: 0;
    margin: 0;
    position: absolute;
    top: ${(props) =>
      props.typeSlider === "destination"
        ? "60px"
        : props.typeSlider === "crew"
        ? "380px"
        : "0px"};
    left: ${(props) =>
      props.typeSlider === "destination"
        ? "calc(40vw + 140px)"
        : props.typeSlider === "crew"
        ? "60px"
        : "0px"};
    list-style: none;

    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
    }

    .slick-active div {
      ${(props) =>
        props.typeSlider === "crew" &&
        `
        background-color: #fff !important;
      
    `}
      ${(props) =>
        props.typeSlider === "destination" &&
        `
         position: relative;
         &:after {
          content: "";
          display: block;
          width: 100%;
          height: 3px;
          background-color: #fff;
          position: absolute;
          bottom: -22px;
         
                    }
                       
    `}
    }
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    height: 10px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 10px;
    height: 10px;
    padding: 5px;

    cursor: pointer;
  }
`;

export const ItemSlider = styled.div<{
  typeSlider: string;
}>`
  display: flex !important;
  flex-direction: ${(props) =>
    props.typeSlider === "destination" ? "row" : "row-reverse"};
  /* overflow: hidden; */

  h2 {
    font-size: ${(props) =>
      props.typeSlider === "destination" ? "6vw" : "4vw"};

    font-weight: 300;
  }
  article {
    max-width: 430px;
    color: #fff;
    position: relative;
    &:after {
      content: "";
      display: ${(props) =>
        props.typeSlider === "destination" ? "block" : "none"};
      width: 100%;
      height: 2px;
      background-color: #7d7e83;
      position: absolute;
      bottom: -34px;
    }
  }
  ul {
    padding-top: 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Img = styled.div<{
  typeSlider: string;
}>`
  flex: 0 0 50%;
  img {
    width: 380px;
    /* height: 90%; */
    display: block;
    margin: 0px auto;
    padding-top: 50px;
    background-size: cover;
    margin: ${(props) =>
      props.typeSlider === "technology" ? "0 0 0 auto" : " 0px auto"};
  }
`;

export const Text = styled.div`
  flex: 0 0 50%;
  padding-top: 100px;
`;
