import createImageUrlBuilder from '@sanity/image-url'
import type { Image, ImageCrop, ImageHotspot } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export interface SanityImage {
  _type: "image",
  _key: string,
  asset: {
    _ref: string,
    _type: "reference"
  },
  crop?: ImageCrop
  hotspot?: ImageHotspot
}

export const urlForImage = (source: SanityImage) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
