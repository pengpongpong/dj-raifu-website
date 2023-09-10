import { groq } from "next-sanity";

export type Seo = {
    title: string;
    description: string;
    keywords: string;
}

// navbar
export const navQuery = groq`*[_type =="logo"][0]{
    image
}`

// home page
export const homeQuery = groq`*[_type == "home"][0]{
    _id,
    title,
    subTitle,
    content,
    contactText,
    contactButton,
    slug,
    diashow,
    soundcloud,
    seo
}`

// about-me page
export const aboutMeQuery = groq`*[_type == "aboutMe"][0]{
    title,
    subTitle,
    image,
    content,
    seo
}`

// privacy-policy page
export const privacyPolicyQuery = groq`*[_type == "privacyPolicy"][0]{
    title,
    subTitle,
    content,
    seo
}`

// contact page
export const contactQuery = groq`*[_type == "contact"][0]{
    title,
    name,
    contactForm,
    email,
    telephone,
    datePicker,
    message,
    button,
    error,
    seo
}`

// cookie banner data
export const cookieQuery = groq`*[_type == "cookie"][0]{
    iconText,
    text,
    acceptButton, 
    modalButton,
    modal
    }`