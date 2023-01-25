import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactAudioPlayer from "react-audio-player";

import audio1 from "./audio/1.mp3";
import audio2 from "./audio/2.mp3";
import audio3 from "./audio/3.mp3";
import audio4 from "./audio/4.mp3";
import audio5 from "./audio/5.mp3";
import audio6 from "./audio/6.mp3";
import audio7 from "./audio/7.mp3";
import audio8 from "./audio/8.mp3";
import audio9 from "./audio/9.mp3";
import audio10 from "./audio/10.mp3";
import audio11 from "./audio/11.mp3";
import audio12 from "./audio/12.mp3";
import audio13 from "./audio/13.mp3";
import audio14 from "./audio/14.mp3";

import { useSwipeable } from "react-swipeable";

import "./slider.css";
import Slide1 from "./components/Slide1";

const Slider = () => {
  const [count, setCount] = useState(0);

  const slide_item = [
    <div className="img-container">
      <ReactAudioPlayer src={audio1} autoPlay={true} controls={false} />
      <img className="img1" src="slider_img/1slider.jpg" />
      <img className="img2" src="slider_img/1slider2.jpg" />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/2slider.jpg" />
      <img className="img2" src="slider_img/2slider2.jpg" />
      <ReactAudioPlayer src={audio2} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/3slider.jpg" />
      <img className="img2" src="slider_img/3slider2.jpg" />
      <ReactAudioPlayer src={audio3} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/4slider.jpg" />
      <img className="img2" src="slider_img/4slider2.jpg" />
      <ReactAudioPlayer src={audio4} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/5slider.jpg" />
      <img className="img2" src="slider_img/5slider2.jpg" />
      <ReactAudioPlayer src={audio5} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/6slider.jpg" />
      <img className="img2" src="slider_img/6slider2.jpg" />
      <ReactAudioPlayer src={audio6} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/7slider.png" />
      <img className="img2" src="slider_img/7slider2.png" />
      <ReactAudioPlayer src={audio7} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/8slider.png" />
      <img className="img2" src="slider_img/8slider2.png" />
      <ReactAudioPlayer src={audio8} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/9slider.png" />
      <img className="img2" src="slider_img/9slider2.png" />
      <ReactAudioPlayer src={audio9} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/10slider.png" />
      <img className="img2" src="slider_img/10slider2.png" />
      <ReactAudioPlayer src={audio10} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/11slider.png" />
      <img className="img2" src="slider_img/11slider2.png" />
      <ReactAudioPlayer src={audio11} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/12slider.png" />
      <img className="img2" src="slider_img/12slider2.png" />
      <ReactAudioPlayer src={audio12} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/13slider.png" />
      <img className="img2" src="slider_img/13slider2.png" />
      <ReactAudioPlayer src={audio13} autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/14slider.png" />
      <img className="img2" src="slider_img/14slider2.png" />
      <ReactAudioPlayer src={audio14} autoPlay={true} controls={false} />
    </div>,
  ];

  useEffect(() => {
    const id = setInterval(() => {
      countIncreatement();
      //    counDecreatement();
    }, 10000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const countIncreatement = () => {
    setCount((oldCount) => (oldCount === 13 ? 13 : oldCount + 1));
  };
  const counDecreatement = () => {
    if (count == 0) {
      return;
    }
    setCount((oldCount) => (oldCount === 0 ? 0 : oldCount - 1));
  };

  const next = () => {
    countIncreatement();
  };
  const prev = () => {
    counDecreatement();
  };

  const handlers = useSwipeable({
    // onSwipedLeft:()=>{console.log("Swiped")},
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    onSwipedDown: () => prev(),
    onSwipedUp: () => next(),
    swipeDuration: 1000,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  //   console.log("sliditem lennght : ", slide_item.length-1);
  console.log("count : ", count);

  return (
    <div {...handlers} className="slider">
      {slide_item[count]}
    </div>
  );
};

export default Slider;
