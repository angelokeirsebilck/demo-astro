import { gql } from "graphql-request";

export const categoriesQuery = gql`
  query entryQuery {
    categories(group: ["blog"], site: ["nl", "en"]) {
      id
      title
      uri
      slug
      siteId
      language
      groupHandle
    }
  }
`;
