"use client"
import React, { useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";

import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import "swiper/css/bundle";

import { SanityImage, urlForImage } from "@/sanity/lib/image";


const ImageSlider = ({ imageList }: { imageList: SanityImage[] }) => {
    register()

    // init swiper
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

    // create images from imageList and convert sanity url to links
    const images = imageList.map(obj => (
        <picture className="swiper-slide w-[400px] h-[300px]" key={obj._key} >
            <Link href="https://instagram.com" rel="noreferrer noopener" target="_blank">
                <Image src={urlForImage(obj).size(2560, 1440).url()} fill sizes="400, 300" style={{ objectFit: "cover" }} alt="" />
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