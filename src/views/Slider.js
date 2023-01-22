import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './slider.css'

const Slider = () => {
  return (
    <div className='slider'>
        <Carousel autoPlay={true} interval={10000} infiniteLoop={true}>
            <div className='img-container'>
                <img className='img1' src='slider_img/1slider.jpg'/>
                <img className='img2' src='slider_img/1slider2.jpg'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/2slider.jpg'/>
                <img className='img2' src='slider_img/2slider2.jpg'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/3slider.jpg'/>
                <img className='img2' src='slider_img/3slider2.jpg'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/4slider.jpg'/>
                <img className='img2' src='slider_img/4slider2.jpg'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/5slider.jpg'/>
                <img className='img2' src='slider_img/5slider2.jpg'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/6slider.jpg'/>
                <img className='img2' src='slider_img/6slider2.jpg'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/7slider.png'/>
                <img className='img2' src='slider_img/7slider2.png'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/8slider.png'/>
                <img className='img2' src='slider_img/8slider2.png'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/9slider.png'/>
                <img className='img2' src='slider_img/9slider2.png'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/10slider.png'/>
                <img className='img2' src='slider_img/10slider2.png'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/11slider.png'/>
                <img className='img2' src='slider_img/11slider2.png'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/12slider.png'/>
                <img className='img2' src='slider_img/12slider2.png'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/13slider.png'/>
                <img className='img2' src='slider_img/13slider2.png'/>
            </div>
            <div className='img-container'>
                <img className='img1' src='slider_img/14slider.png'/>
                <img className='img2' src='slider_img/14slider2.png'/>
            </div>
        </Carousel>
    </div>
  )
}

export default Slider