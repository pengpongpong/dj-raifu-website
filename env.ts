import { assertValue } from "@/utils/utils"

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-07-26"

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = true

export const sesUrl = assertValue(
  process.env.NEXT_PUBLIC_SES_URL_AWS,
  'Missing environment variable: NEXT_PUBLIC_SES_URL_AWS'
)

export const sesKey = assertValue(
  process.env.NEXT_PUBLIC_SES_KEY_AWS,
  'Missing environment variable: NEXT_PUBLIC_SES_KEY_AWS'
)