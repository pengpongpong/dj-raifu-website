"use client"
import React, { useEffect, useRef } from 'react'
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
            autoplay: {
                delay: 2500
            },
            loop: true,
            centeredSlides: true,
            effect: "fade",
            speed: 2000,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        })
    }, [])

    // create images from imageList and convert sanity url to links
    const images = imageList.map(obj => (
        <div className="swiper-slide w-full h-full !flex !justify-center !items-center" key={obj._key} >
            <Link href="https://instagram.com" rel="noreferrer noopener" target="_blank">
                <Image src={urlForImage(obj).size(2560, 1440).url()} width={2560} height={1440} style={{ width: "auto", height: "100%", objectFit: "cover" }} alt="" />
            </Link>
        </div>

    ))

    return (
        <section className="my-12 w-full">
            <div className="swiper h-[300px] max-w-[450px] md:h-[400px] md:max-w-[700px] lg:h-[500px] lg:max-w-[900px] xl:h-[850px] xl:max-w-[1600px]">
                <div className="swiper-wrapper">
                    {images}
                </div>

                <div className="swiper-button-prev !text-white opacity-30"></div>
                <div className="swiper-button-next !text-white opacity-30"></div>
            </div>
        </section>
    )
}

export default ImageSlider