"use client"
import React, { useEffect } from 'react'
import Image from "next/image";

import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import "swiper/css/bundle";

import { SanityImage, urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

interface ImageSlider {
    image: SanityImage,
    url: string,
    _key: string
}

const ImageSlider = ({ imageList }: { imageList: ImageSlider[] }) => {
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
            speed: 1500,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        })
    }, [])

    // create images from imageList and convert sanity url to links
    const images = imageList?.map(obj => (
        <Link rel="noreferrer noopener" target="_blank" href={obj.url} className="swiper-slide w-full h-full !flex !justify-center !items-center" key={obj._key}>
            <Image className="block" src={urlForImage(obj.image).url()} width={2560} height={1440} style={{ width: "100%", height: "auto", objectFit: "cover" }} alt="" />
        </Link>

    ))

    return (
        <section className="my-12 w-full">
            <div className="swiper h-[300px] max-w-[450px] md:h-[400px] md:max-w-[700px] lg:h-[500px] lg:max-w-[900px] xl:h-[850px] xl:max-w-[1200px]">
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