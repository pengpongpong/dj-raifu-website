import {defineType, defineField} from "sanity"

export default defineType({
    name: "imprint",
    title: "Impressum",
    type: "document",
    fields: [
        defineField({
            name: "company",
            title: "Firma",
            type: "string"
        }),
        defineField({
            name: "owner",
            title: "Inhaber",
            type: "string"
        }),
        defineField({
            name: "data",
            title: "Daten",
            type: "object",
            fields: [
                defineField({
                    name: "uid",
                    title: "UID-Nr",
                    type: "string"
                }),
                defineField({
                    name: "owner",
                    title: "Inhaber",
                    type: "string"
                }),
            ]
        }),
    ]
})