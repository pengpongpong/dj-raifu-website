import { type SchemaTypeDefinition } from 'sanity'
import home from "./schema/document/home"
import aboutMe from "./schema/document/aboutMe"
import privacyPolicy from "./schema/document/privacyPolicy"
import cookie from "./schema/document/cookie"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    aboutMe,
    privacyPolicy,
    cookie
  ],
}
