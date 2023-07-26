import { type SchemaTypeDefinition } from 'sanity'
import home from "./schema/document/home"
import aboutMe from "./schema/document/aboutMe"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    aboutMe
  ],
}
