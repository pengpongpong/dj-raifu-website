import {defineType, defineField} from "sanity"

export default defineType({
    name: "imprint",
    title: "Impressum",
    type: "document",
    fields: [
        defineField({
            name: "company",
            title: "Firmenname",
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
                    name: "phone",
                    title: "Telefon",
                    type: "string"
                }),
                defineField({
                    name: "email",
                    title: "Email",
                    type: "string"
                }),
            ]
        }),
    ]
})