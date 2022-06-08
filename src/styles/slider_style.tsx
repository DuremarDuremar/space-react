import styled from "styled-components";
import Slider from "react-slick";

export const WrapperSlider = styled(Slider)`
  position: relative;
  color: #fff;
  padding: 150px 70px 0 70px;
  h3 {
    position: absolute;
    left: 0;
  }
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
    width: 100%;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 220px;
    left: 250px;
    list-style: none;

    text-align: center;
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
  typeSlider?: string;
}>`
  display: flex !important;
  flex-direction: ${(props) =>
    props.typeSlider === "destination" ? "row" : "row-reverse"};
  img {
    max-width: 360px;
    display: block;
    margin: 0px auto;
    padding-top: 50px;
  }

  h2 {
    font-size: 6vw;
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

export const Left = styled.div`
  flex: 0 0 50%;
`;

export const Right = styled.div`
  flex: 0 0 50%;
  padding-top: 100px;
`;
