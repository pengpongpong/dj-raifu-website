import { defineType, defineField } from "sanity";

export default defineType({
    name: "logo",
    title: "Logo",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Bild",
            type: "image",
            options: {
                hotspot: true
            }
        })
    ],

    preview: {
        prepare() {
            return {title: "Logo" };
        },
    }
})