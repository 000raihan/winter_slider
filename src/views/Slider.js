import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactAudioPlayer from "react-audio-player";

import audio1 from "./audio/aud_1.mp3";
import audio2 from "./audio/aud_2.mp3";
import audio3 from "./audio/aud_3.mp3";
import audio4 from "./audio/aud_4.mp3";
import audio5 from "./audio/aud_5.mp3";
import audio6 from "./audio/aud_6.mp3";
import audio7 from "./audio/aud_7.mp3";
import audio8 from "./audio/aud_8.mp3";
import audio9 from "./audio/aud_9.mp3";
import audio10 from "./audio/aud_10.mp3";
import audio11 from "./audio/aud_11.mp3";
import audio12 from "./audio/aud_12.mp3";
import audio13 from "./audio/aud_13.mp3";
import audio14 from "./audio/aud_14.mp3";

import { useSwipeable } from "react-swipeable";

import "./slider.css";
import Slide1 from "./components/Slide1";

const Slider = () => {
  const [count, setCount] = useState(0);

  const slideItems = [
    // {
    //   id: 1,
    //   nextTime: 5000,
    //   content: (
    //     <div className="img-container">
    //       {/* <audio src={audio1} autoPlay type="audio/mp3">Your browser does not support the audio element</audio> */}

    //       <ReactAudioPlayer src={audio1} autoPlay={true} controls={false} />
    //       <img className="img1" src="slider_img/1slider.jpg" />
    //       <img className="img2" src="slider_img/1slider2.jpg" />
    //     </div>
    //   ),
    // },
    {
      id: 2,
      nextTime: 8000,
      content: (
        <div className="img-container">
          <img className="img1" src="slider_img/2slider.jpg" />
          <img className="img2" src="slider_img/2slider2.jpg" />

          <ReactAudioPlayer src={audio2} autoPlay={true} controls={false} />
        </div>
      ),
    },
    {
      id: 3,
      nextTime: 6000,
      content: (
        <div className="img-container">
      <img className="img1" src="slider_img/3slider.jpg" />
      <img className="img2" src="slider_img/3slider2.jpg" />
      <ReactAudioPlayer src={audio3} autoPlay={true} controls={false} />
    </div>
      ),
    },
    {
      id: 4,
      nextTime: 5000,
      content: (
        <div className="img-container">
      <img className="img1" src="slider_img/4slider.jpg" />
      <img className="img2" src="slider_img/4slider2.jpg" />
      <ReactAudioPlayer src={audio4} autoPlay={true} controls={false} />
    </div>
      ),
    },
    {
      id: 5,
      nextTime: 6000,
      content: (
        <div className="img-container">
      <img className="img1" src="slider_img/5slider.jpg" />
      <img className="img2" src="slider_img/5slider2.jpg" />
      <ReactAudioPlayer src={audio5} autoPlay={true} controls={false} />
    </div>
      ),
    },
    {
      id: 6,
      nextTime: 7000,
      content: (
        <div className="img-container">
      <img className="img1" src="slider_img/6slider.jpg" />
      <img className="img2" src="slider_img/6slider2.jpg" />
      <ReactAudioPlayer src={audio6} autoPlay={true} controls={false} />
    </div>
      ),
    },
    {
      id: 7,
      nextTime: 6000,
      content: (
        <div className="img-container">
        <img className="img1" src="slider_img/7slider.png" />
        <img className="img2" src="slider_img/7slider2.png" />
        <ReactAudioPlayer src={audio7} autoPlay={true} controls={false} />
      </div>
      ),
    },
    {
      id: 8,
      nextTime: 8000,
      content: (
        <div className="img-container">
        <img className="img1" src="slider_img/8slider.png" />
        <img className="img2" src="slider_img/8slider2.png" />
        <ReactAudioPlayer src={audio8} autoPlay={true} controls={false} />
      </div>
      ),
    },
    {
      id: 9,
      nextTime: 9000,
      content: (
        <div className="img-container">
        <img className="img1" src="slider_img/9slider.png" />
        <img className="img2" src="slider_img/9slider2.png" />
        <ReactAudioPlayer src={audio9} autoPlay={true} controls={false} />
      </div>
      ),
    },
    {
      id: 10,
      nextTime: 4000,
      content: (
        <div className="img-container">
        <img className="img1" src="slider_img/10slider.png" />
        <img className="img2" src="slider_img/10slider2.png" />
        <ReactAudioPlayer src={audio10} autoPlay={true} controls={false} />
      </div>
      ),
    },
    {
      id: 11,
      nextTime: 5000,
      content: (
        <div className="img-container">
        <img className="img1" src="slider_img/11slider.png" />
        <img className="img2" src="slider_img/11slider2.png" />
        <ReactAudioPlayer src={audio11} autoPlay={true} controls={false} />
      </div>
      ),
    },
    {
      id: 12,
      nextTime: 3000,
      content: (
        <div className="img-container">
        <img className="img1" src="slider_img/12slider.png" />
        <img className="img2" src="slider_img/12slider2.png" />
        <ReactAudioPlayer src={audio12} autoPlay={true} controls={false} />
      </div>
      ),
    },
    {
      id: 13,
      nextTime: 3000,
      content: (
        <div className="img-container">
      <img className="img1" src="slider_img/13slider.png" />
      <img className="img2" src="slider_img/13slider2.png" />
      <ReactAudioPlayer src={audio13} autoPlay={true} controls={false} />
    </div>
      ),
    },
    {
      id: 14,
      nextTime: 10000,
      content: (
        <div className="img-container">
        <img className="img1" src="slider_img/14slider.png" />
        <img className="img2" src="slider_img/14slider2.png" />
        <ReactAudioPlayer src={audio14} autoPlay={true} controls={false} />
      </div>
      ),
    },
  ];
  const [s, setS] = useState(slideItems[count]);

  console.log("s is : ", s);

  const countIncreatement = () => {
    console.log("im called");
    setCount((oldCount) =>
      oldCount === slideItems.length - 1 ? 0 : oldCount + 1
    );
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

  //   setTimeout(() => {
  //     setInterval(() => {
  //       countIncreatement()
  //         // setTime(new Date().toLocaleTimeString())
  //     }, 1000)
  // })

  useEffect(() => {
   const timer = setTimeout(() => {
      countIncreatement();
      // console.log('This will run after 1 second!')
    },s.nextTime);
    // timer();
    return () => clearTimeout(timer);
  }, [s]);

  useEffect(() => {
    // setInterval(countIncreatement(), 1000);
    // setTimeout(countIncreatement(), s.time);
    // const timer = setTimeout(() => countIncreatement(), 1000);
    // clearTimeout(timer);
    // const id = setInterval((value) => {
    //   console.log("value is : ", value)
    //   countIncreatement();
    //   //    counDecreatement();
    // }, s.time);
    // return () => {
    //   clearInterval(id);
    // };
  }, []);

  useEffect(() => {
    setS(slideItems[count]);
  }, [count]);

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
      {s?.content}
    </div>
  );
};

export default Slider;
