import { gql } from "graphql-request"

export const pagesDefault = gql`
  query entryQuery($uri: [String]!, $siteId: [QueryArgument]!) {
    entry(uri: $uri, siteId: $siteId) {
      title
      ... on pages_default_Entry {
        id
        fieldPageBuilder {
          nodes {
            type
            ... on fieldPageBuilder_blockImage_BlockType {
              type
              blockTypeHandle
              fieldImage {
                id
                url
              }
            }
            ... on fieldPageBuilder_blockText_BlockType {
              type
              fieldText
              blockTypeHandle
            }
            html
            content
            tagName
            text
          }
        }
      }
    }
  }
`
