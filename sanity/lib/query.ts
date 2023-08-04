import { groq } from "next-sanity";

// navbar
export const navQuery = groq`*[_type =="logo"][0]{image}`

// home page
export const homeQuery = groq`*[_type == "home"][0]`

// about-me page
export const aboutMeQuery = groq`*[_type == "aboutMe"][0]`

// privacy-policy page
export const privacyPolicyQuery = groq`*[_type == "privacyPolicy"][0]`

// contact page
export const contactQuery = groq`*[_type == "contact"][0]`