import { defineType, defineField } from "sanity";

export default defineType({
    name: "contact",
    title: "Kontakt",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Überschrift",
            type: "string",
        }),
        defineField({
            name: "name",
            title: "Name Platzhalter",
            type: "string",
        }),
        defineField({
            name: "contactForm",
            title: "Kontaktform Platzhalter",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email Platzhalter",
            type: "string",
        }),
        defineField({
            name: "telephone",
            title: "Telefon Platzhalter",
            type: "string",
        }),
        defineField({
            name: "datePicker",
            title: "Datum Platzhalter",
            type: "string",
        }),
        defineField({
            name: "message",
            title: "Nachricht Platzhalter",
            type: "string",
        }),
        defineField({
            name: "button",
            title: "Absenden Platzhalter",
            type: "string",
        }),
        defineField({
            name: "error",
            title: "Fehlermeldungen Text",
            type: "object",
            fields: [
                defineField({
                    name: "name",
                    title: "Kein Name Fehlermeldung",
                    type: "string",
                }),
                defineField({
                    name: "select",
                    title: "Keine Kontaktform Fehlermeldung",
                    type: "string",
                }),
                defineField({
                    name: "email",
                    title: "Keine Email Fehlermeldung",
                    type: "string",
                }),
                defineField({
                    name: "telephone",
                    title: "Kein Telefon Fehlermeldung",
                    type: "string",
                }),
                defineField({
                    name: "date",
                    title: "Kein Datum Fehlermeldung",
                    type: "string",
                }),
            ]
        }),

    ]
})