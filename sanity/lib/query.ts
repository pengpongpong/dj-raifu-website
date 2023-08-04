import { groq } from "next-sanity";


export const navQuery = groq`*[_type =="logo"][0]{image}`

export const homeQuery = groq`*[_type == "home"][0]`

export const aboutMeQuery = groq`*[_type == "aboutMe"][0]`

export const privacyPolicyQuery = groq`*[_type == "privacyPolicy"][0]`