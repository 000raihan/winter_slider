import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './slider.css'

const Slider = () => {
  return (
    <div className='slider'>
        <Carousel interval={3000} infiniteLoop={true}>
            <div className='img-container'>
                <img src='slider_img/1slider.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/2slider.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/3slider.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/4slider.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/5slider.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/6slider.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/7slider.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/8slider.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/9slider.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/10slider.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/11slider.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/12slider.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/13slider.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/14slider.png'/>
            </div>
        </Carousel>
    </div>
  )
}

export default Slider