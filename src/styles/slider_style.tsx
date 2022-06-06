import styled from "styled-components";
import Slider from "react-slick";

export const WrapperSlider = styled(Slider)`
  width: 100%;
  /* overflow-x: hidden; */
  color: #fff;
  padding-top: 200px;
  display: flex;
  flex-direction: column-reverse;

  .slick-slider {
  }

  .slick-slide {
    width: 100%;
    /* height: 100%; */
    /* img {
      display: block;
      margin: 0px auto;
      width: 100%;
      max-width: 80vw;
      max-height: 90vh;
      object-fit: contain;
    } */
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

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    /* width: 80px; */
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

export const ItemSlider = styled.div`
  display: flex !important;
  img {
    max-width: 360px;
    height: 100%;
    display: block;
    margin: 0px auto;
  }
  article {
  }
`;

export const Left = styled.div`
  flex: 0 0 50%;
`;

export const Right = styled.div`
  flex: 0 0 50%;
`;
