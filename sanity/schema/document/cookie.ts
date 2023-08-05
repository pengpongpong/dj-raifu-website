import { defineType, defineField } from "sanity";

export default defineType({
    name: "cookie",
    title: "Cookie",
    type: "document",
    fields: [
        defineField({
            name: "iconText",
            title: "Text Info Icon",
            type: "string"
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "string"
        }),
        defineField({
            name: "modalButton",
            title: "Erweitert Button Text",
            type: "string"
        }),
        defineField({
            name: "acceptButton",
            title: "Akzeptiere Button Text",
            type: "string"
        }),
        defineField({
            name: "modal",
            title: "Erweitert Fenster",
            type: "object",
            fields: [
                defineField({
                    name: "title",
                    title: "Überschrift",
                    type: "string"
                }),
                defineField({
                    name: "requiredHead",
                    title: "Erforderliche Cookies Überschrift",
                    type: "string"
                }),
                defineField({
                    name: "requiredText",
                    title: "Erforderliche Cookies Text",
                    type: "text"
                }),
                defineField({
                    name: "functionalHead",
                    title: "Funktionale Cookies Überschrift",
                    type: "string"
                }),
                defineField({
                    name: "functionalText",
                    title: "Funktionale Cookies Text",
                    type: "text"
                }),
                defineField({
                    name: "analyticsHead",
                    title: "Analytics Cookies Überschrift",
                    type: "string"
                }),
                defineField({
                    name: "analyticsText",
                    title: "Analytics Cookies Text",
                    type: "text"
                }),
                defineField({
                    name: "advertisementHead",
                    title: "Werbe Cookies Überschrift",
                    type: "string"
                }),
                defineField({
                    name: "advertisementText",
                    title: "Werbe Cookies Text",
                    type: "text"
                }),
                defineField({
                    name: "acceptButton",
                    title: "Akzeptiere Button Text",
                    type: "string"
                }),
                defineField({
                    name: "userSettingsButton",
                    title: "User Einstellung speichern Button Text",
                    type: "string"
                }),
                defineField({
                    name: "denyButton",
                    title: "Ablehnen Button Text",
                    type: "string"
                }),
            ]
        })
    ]
})