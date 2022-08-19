import { gql } from "graphql-request"

export const entryQuery = gql`
  query entryQuery($uri: [String]!, $siteId: [QueryArgument]!) {
    entry(uri: $uri, siteId: $siteId) {
      id
      title
      uri
      slug
      typeHandle
      sectionHandle
      siteId
      language
    }
  }
`
