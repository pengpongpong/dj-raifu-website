import { isUniqueAcrossAllDocuments } from "@/sanity/lib/isUniqueSlug";
import { defineType, defineField } from "sanity";

export default defineType({
    name: "home",
    title: "Home",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Überschrift",
            type: "string"
        }),
        defineField({
            name: "subTitle",
            title: "Unter-Überschrift",
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Url",
            type: "slug",
            options: {
                source: "title",
                isUnique: isUniqueAcrossAllDocuments
            }
        }),
        defineField({
            name: "diashow",
            title: "Diashow Bilder",
            type: "array",
            of: [
                defineField({
                    name: "images",
                    title: "Bilder",
                    type: "object",
                    fields: [
                        defineField({
                            name: "image",
                            title: "Bild",
                            type: "image",
                            options: {
                                hotspot: true
                            }
                        }),
                        defineField({
                            name: "url",
                            title: "Link",
                            type: "string",
                        }),
                        defineField({
                            name: "alt",
                            title: "Alternativ Text",
                            type: "string",
                        }),
                        defineField({
                            name: "diashow",
                            title: "Zeige in Diashow",
                            type: "boolean",
                        })
                    ]
                }),

            ]
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "text"
        }),
        defineField({
            name: "contactText",
            title: "Kontakt Text",
            type: "text"
        }),
        defineField({
            name: "contactButton",
            title: "Kontakt Button Text",
            type: "string"
        }),
        defineField({
            name: "soundcloud",
            title: "Soundcloud",
            type: "array",
            of: [
                defineField({
                    name: "link",
                    title: "Soundcloud Link",
                    type: "string"
                })
            ]
        }),
        defineField({
            name: "spotify",
            title: "Spotify",
            type: "array",
            of: [
                defineField({
                    name: "link",
                    title: "Spotify Link",
                    type: "string"
                })
            ]
        }),
        defineField({
            name: "seo",
            title: "SEO",
            type: "object",
            fields: [
                defineField({
                    name: "title",
                    title: "Website Titel",
                    type: "string"
                }),
                defineField({
                    name: "description",
                    title: "Website Beschreibung",
                    type: "text"
                }),
                defineField({
                    name: "keywords",
                    title: "Website Keywords",
                    type: "text"
                }),
            ]
        })
    ]
})