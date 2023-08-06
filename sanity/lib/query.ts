import { groq } from "next-sanity";

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
    soundcloud
}`

// about-me page
export const aboutMeQuery = groq`*[_type == "aboutMe"][0]{
    title,
    subTitle,
    image,
    content
}`

// privacy-policy page
export const privacyPolicyQuery = groq`*[_type == "privacyPolicy"][0]{
    title,
    subTitle,
    content
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
    error
}`