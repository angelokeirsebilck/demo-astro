import { gql } from "graphql-request"

export const categoryQuery = gql`
  query entryQuery($uri: [String]!, $siteId: [QueryArgument]!) {
    category(uri: $uri, siteId: $siteId) {
      id
      title
      uri
      slug
      siteId
      language
      groupHandle
    }
  }
`
