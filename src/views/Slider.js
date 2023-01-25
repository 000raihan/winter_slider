import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactAudioPlayer from "react-audio-player";

import { useSwipeable } from "react-swipeable";

import "./slider.css";
import Slide1 from "./components/Slide1";

const Slider = () => {
  const [count, setCount] = useState(0);


  const slide_item = [
    <Slide1 />,
    <div className="img-container">
      <img className="img1" src="slider_img/2slider.jpg" />
      <img className="img2" src="slider_img/2slider2.jpg" />

      <ReactAudioPlayer src="/audio/2.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/3slider.jpg" />
      <img className="img2" src="slider_img/3slider2.jpg" />
      <ReactAudioPlayer src="/audio/3.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/4slider.jpg" />
      <img className="img2" src="slider_img/4slider2.jpg" />
      <ReactAudioPlayer src="/audio/4.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/5slider.jpg" />
      <img className="img2" src="slider_img/5slider2.jpg" />
      <ReactAudioPlayer src="/audio/5.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/6slider.jpg" />
      <img className="img2" src="slider_img/6slider2.jpg" />
      <ReactAudioPlayer src="/audio/6.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/7slider.png" />
      <img className="img2" src="slider_img/7slider2.png" />
      <ReactAudioPlayer src="/audio/7.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/8slider.png" />
      <img className="img2" src="slider_img/8slider2.png" />
      <ReactAudioPlayer src="/audio/8.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/9slider.png" />
      <img className="img2" src="slider_img/9slider2.png" />
      <ReactAudioPlayer src="/audio/9.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/10slider.png" />
      <img className="img2" src="slider_img/10slider2.png" />
      <ReactAudioPlayer src="/audio/10.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/11slider.png" />
      <img className="img2" src="slider_img/11slider2.png" />
      <ReactAudioPlayer src="/audio/11.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/12slider.png" />
      <img className="img2" src="slider_img/12slider2.png" />
      <ReactAudioPlayer src="/audio/12.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/13slider.png" />
      <img className="img2" src="slider_img/13slider2.png" />
      <ReactAudioPlayer src="/audio/13.mp3" autoPlay={true} controls={false} />
    </div>,
    <div className="img-container">
      <img className="img1" src="slider_img/14slider.png" />
      <img className="img2" src="slider_img/14slider2.png" />
      <ReactAudioPlayer src="/audio/14.mp3" autoPlay={true} controls={false} />
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
    setCount((oldCount) => oldCount === 13 ? 13: oldCount + 1);
  };
  const counDecreatement = () => {
    if (count == 0) {
      return;
    }
    setCount((oldCount) => oldCount===0 ? 0 : oldCount - 1);
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
