"use client"
import React, { useEffect } from 'react'
import Image from "next/image";
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import "swiper/css/bundle";
import Link from "next/link";


const ImageSlider = () => {
    register()

    useEffect(() => {
        new Swiper(".swiper", {
            spaceBetween: 30,
            autoplay: {
                delay: 2000
            },
            loop: true,
            effect: "fade",
            speed: 1000,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        })
    }, [])

    const imageUrl = [
        { url: "/diashow1.jpg" },
        { url: "/diashow2.jpg" },
        { url: "/diashow3.jpg" },
    ]

    const images = imageUrl.map(obj => (
        <picture className="swiper-slide w-[400px] h-[300px]" key={obj.url} >
            <Link href="https://instagram.com" rel="noreferrer noopener" target="_blank">
                <Image src={obj.url} fill sizes="400, 300" style={{ objectFit: "cover" }} alt="" />
            </Link>
        </picture>
    ))

    return (
        <section className="my-12 w-full">
            <div className="swiper h-[300px]">
                <div className="swiper-wrapper">
                    {images}
                </div>

                <div className="swiper-button-prev !text-white opacity-70"></div>
                <div className="swiper-button-next !text-white opacity-70"></div>
            </div>
        </section>
    )
}

export default ImageSlider