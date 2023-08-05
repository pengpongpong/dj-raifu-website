"use client"
import React, { lazy, useEffect } from 'react'
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
            <Image src={urlForImage(obj.image).url()} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw" priority style={{ objectFit: "contain" }} alt="Image slide" />
        </Link>

    ))

    return (
        <section className="my-12 w-full">
            <div className="swiper h-[450px] max-w-[450px] md:h-[700px] md:max-w-[700px] lg:h-[900px] lg:max-w-[900px] xl:h-[900px] xl:max-w-[900px]">
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