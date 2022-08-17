import { gql } from "graphql-request";

export const entriesQuery = gql`
  query entryQuery {
    entries(section: ["pages", "blog", "home"], site: ["nl", "en"]) {
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
`;
