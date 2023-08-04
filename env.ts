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

export const awsAccessKey = assertValue(
  process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  'Missing environment variable: NEXT_PUBLIC_AWS_ACCESS_KEY'
)

export const awsSecretKey = assertValue(
  process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  'Missing environment variable: NEXT_PUBLIC_AWS_ACCESS_KEY'
)

