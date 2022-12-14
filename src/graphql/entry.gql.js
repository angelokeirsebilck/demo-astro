import { gql } from "graphql-request";

export const entryQuery = gql`
  query entryQuery($section: [String]!, $site: [String]!) {
    entry(section: $section, site: $site) {
      id
      title
      uri
      slug
      typeHandle
      sectionHandle
      siteId
    }
  }
`;
