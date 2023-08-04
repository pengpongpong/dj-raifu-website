import { defineConfig } from 'sanity'
import { DefaultDocumentNodeResolver, deskTool } from 'sanity/desk'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import { SanityDocument } from "next-sanity"

import Iframe from 'sanity-plugin-iframe-pane'

// Customize this function to show the correct URL based on the current document
function getPreviewUrl(doc: SanityDocument) {
  return doc?.slug?.current
    ? `${window.location.host}/${doc.slug.current}`
    : window.location.host
}

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case "home":
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: "http://localhost:3000/api/preview",
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}



export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({ defaultDocumentNode }),
  ],
  // document: {
  //   // prev is the result from previous plugins and thus can be composed
  //   productionUrl: async (prev, context) => {
  //     // context includes the client and other details
  //     const {getClient, dataset, document} = context
  //     const client = getClient({apiVersion: '2023-07-26'})

  //     if (document._type === 'aboutMe') {
  //       const slug = await client.fetch(
  //         `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
  //         {postId: document._id}
  //       )

  //       const params = new URLSearchParams()
  //       params.set('preview', 'true')
  //       params.set('dataset', dataset)

  //       return `https://my-site.com/posts/${slug}?${params}`
  //     }

  //     return prev
  //   },
  // },
})
