"use client"
import React, { useEffect } from 'react'
import Image from "next/image";
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

    const imageUrl = [
        { url: "/diashow1.jpg" },
        { url: "/diashow2.jpg" },
        { url: "/diashow3.jpg" },
    ]

    const images = imageUrl.map(obj => (<Image className="swiper-slide" src={obj.url} width={300} height={300} style={{width: "auto", height: "auto", objectFit: "cover"}} alt="" key={obj.url} />))

    return (
        <section className="my-8">
            <div className="swiper w-full">
                <div className="swiper-wrapper">
                    {images}
                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

            </div>
        </section>
    )
}

export default ImageSlider