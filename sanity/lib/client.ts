import { cache } from "react"

import { apiVersion, dataset, projectId, useCdn } from "@/env"
import { SanityClient, createClient } from 'next-sanity'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const cachedClient = cache(client.fetch.bind(client))

export function getClient(preview?: { token?: string }): SanityClient {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    perspective: "published"
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getCachedClient = (preview?: { token?: string }) => {
  const client = getClient(preview);

  return cache(client.fetch.bind(client));
};
