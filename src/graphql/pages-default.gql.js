import { gql } from "graphql-request";

export const pagesDefault = gql`
  query entryQuery($uri: [String]!, $siteId: [QueryArgument]!) {
    entry(uri: $uri, siteId: $siteId) {
      title
    }
  }
`;
