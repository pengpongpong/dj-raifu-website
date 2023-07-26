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
            name: "images",
            title: "Diashow Bilder",
            type: "array",
            of: [
                defineField({
                    name: "image",
                    title: "Bild",
                    type: "image",
                    options: {
                        hotspot: true
                    }
                })
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
            name: "instagram",
            title: "Instagram",
            type: "array",
            of: [
                defineField({
                    name: "link",
                    title: "Instagram Link",
                    type: "object",
                    fields: [
                        defineField({
                            name: "url",
                            title: "Url",
                            type: "string"
                        }),
                        defineField({
                            name: "imageUrl",
                            title: "Bild Url",
                            type: "string"
                        }),
                        defineField({
                            name: "id",
                            title: "Bild ID",
                            type: "string"
                        })
                    ]
                })
            ]
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
        })
    ]
})