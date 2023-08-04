import { type SchemaTypeDefinition } from 'sanity'

import home from "./schema/document/home"
import aboutMe from "./schema/document/aboutMe"
import privacyPolicy from "./schema/document/privacyPolicy"
import cookie from "./schema/document/cookie"
import logo from "./schema/document/logo"
import contact from "./schema/document/contact"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    aboutMe,
    privacyPolicy,
    cookie,
    logo,
    contact
  ],
}
