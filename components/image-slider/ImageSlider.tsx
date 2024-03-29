"use client"
import React, { useEffect, useMemo } from 'react'
import Image from "next/image";

import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

import "swiper/css/bundle";

import { SanityImage, urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

type ImageSlider = {
    image: SanityImage,
    url: string,
    diashow: boolean,
    _key: string,
    alt: string
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
            },
            watchOverflow: true
        })
    }, [])

    // create images from imageList and convert sanity url to links
    const images = useMemo(() => {
        return imageList?.map(obj => {
            if (obj.diashow) {
                return (
                    <Link rel="noreferrer noopener" target="_blank" href={obj.url} className="swiper-slide w-full h-full !flex !justify-center !items-center" key={obj._key} >
                        <Image src={urlForImage(obj.image).size(2048, 2048).url()} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw" priority style={{ objectFit: "contain" }} alt={obj.alt} />
                    </Link >
                )
            }
        })
    }, [imageList])

    return (
        <div className="my-12 w-full">
            <div className="swiper h-[450px] w-full max-w-full md:h-[700px] md:max-w-[700px] lg:h-[900px] lg:max-w-[900px] xl:h-[900px] xl:max-w-[900px]">
                <div className="swiper-wrapper">
                    {images}
                </div>

                <div className="swiper-button-prev !text-white opacity-30"></div>
                <div className="swiper-button-next !text-white opacity-30"></div>
            </div>
        </div>
    )
}

export default ImageSlider