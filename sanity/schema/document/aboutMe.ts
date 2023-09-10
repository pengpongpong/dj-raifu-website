import { isUniqueAcrossAllDocuments } from "@/sanity/lib/isUniqueSlug";
import { defineType, defineField } from "sanity";

export default defineType({
    name: "aboutMe",
    title: "Über Mich",
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
            name: "image",
            title: "Bild",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "text"
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