import { gql } from "graphql-request";

export const pagesBlog = gql`
  query entryQuery($uri: [String]!, $siteId: [QueryArgument]!) {
    entry(uri: $uri, siteId: $siteId) {
      title
    }
  }
`;
