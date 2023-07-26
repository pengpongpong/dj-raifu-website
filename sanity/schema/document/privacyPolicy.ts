import { defineType, defineField } from "sanity";

export default defineType({
    name: "privacyPolicy",
    title: "Datenschutz",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Titel",
            type: "string",
        }),
        defineField({
            name: "subTitle",
            title: "Unter Überschrift",
            type: "text",
        }),
        defineField({
            name: "slug",
            title: "Url",
            type: "slug",
            options: {
                source: "title"
            }
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            of: [
                defineField({
                    name: "textBlock",
                    title: "Text Block",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Titel",
                            type: "string",
                        }),
                        defineField({
                            name: "textContent",
                            title: "Text Content",
                            type: "array",
                            of: [
                                {
                                    name: "text",
                                    title: "Text",
                                    type: "text"
                                }
                            ]
                        }),
                    ]
                })
            ]
        })
        
    ]
})