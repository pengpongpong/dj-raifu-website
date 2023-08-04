import { defineConfig } from 'sanity'
import { DefaultDocumentNodeResolver, StructureBuilder, deskTool } from 'sanity/desk'

import { projectId, dataset } from "./env"

import { schema } from './sanity/schema'
import Iframe from 'sanity-plugin-iframe-pane'
import { groq } from "next-sanity"

const domain = process.env.NEXT_PUBLIC_DOMAIN

const previewUrl = {
  home: `${domain}/api/preview?page=/`,
  aboutMe: `${domain}/api/preview?page=/ueber-mich`,
  contact: `${domain}/api/preview?page=/kontakt`,
  privacyPolicy: `${domain}/api/preview?page=/datenschutz`
}

// create preview in studio
const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {

  switch (schemaType) {
    case "home":
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: previewUrl.home,
          })
          .title("Vorschau"),
      ])
    case "aboutMe":
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: previewUrl.aboutMe,
          })
          .title("Vorschau"),
      ])
    case "contact":
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: previewUrl.contact,
          })
          .title("Vorschau"),
      ])
    case "privacyPolicy":
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: previewUrl.privacyPolicy,
          })
          .title("Vorschau"),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}

// structure for pages
const pageStructure = (S: StructureBuilder) =>
  S.list()
    .title("Pages")
    .items([
      S.listItem()
        .title("Home")
        .schemaType("home")
        .child(
          S.documentList()
            .title("Home Page")
            .filter(groq`_type == "home"`)
        ),
      S.listItem()
        .title("Über Mich")
        .schemaType("aboutMe")
        .child(
          S.documentList()
            .title("Über Mich Page")
            .filter(groq`_type == "aboutMe"`)
        ),
      S.listItem()
        .title("Kontakt")
        .schemaType("contact")
        .child(
          S.documentList()
            .title("Kontakt Page")
            .filter(groq`_type == "contact"`)
        ),
      S.listItem()
        .title("Datenschutz")
        .schemaType("privacyPolicy")
        .child(
          S.documentList()
            .title("Datenschutz Page")
            .filter(groq`_type == "privacyPolicy"`)
        ),
    ])


export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
      name: "default",
      title: "Alles",
      defaultDocumentNode
    }),
    deskTool({
      name: "pages",
      title: "Pages",
      structure: pageStructure,
      defaultDocumentNode
    }),
  ],
  // create preview link to open in new blank
  document: {
    productionUrl: async (prev, context) => {
      const { document } = context

      switch (document._type) {
        case "home":
          return previewUrl.home
        case "aboutMe":
          return previewUrl.aboutMe
        case "contact":
          return previewUrl.contact
        case "privacyPolicy":
          return previewUrl.privacyPolicy
      }

      return prev
    },
  },
})
