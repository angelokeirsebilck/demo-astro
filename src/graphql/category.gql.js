import { gql } from "graphql-request"

export const categoryQuery = gql`
  query entryQuery($section: [String]!, $site: [String]!) {
    entry: category(section: $section, site: $site) {
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
