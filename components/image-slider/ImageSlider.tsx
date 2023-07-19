"use client"
import React, { useEffect } from 'react'
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ImageSlider = () => {
    register()

    useEffect(() => {
        const swiper = new Swiper(".swiper", {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 2000
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: [400, 0, 0],
                    origin: "center",
                    rotate: [0, 0, 10]
                },
            }

        })
    }, [])

    return (
        <div>
            <div className="swiper">

                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>

                </div>
                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                <div className="swiper-scrollbar"></div>
            </div>
        </div>
    )
}

export default ImageSlider