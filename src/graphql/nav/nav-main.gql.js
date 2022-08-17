import { gql } from "graphql-request";

export const navMain = gql`
  query navMainQuery($siteId: [QueryArgument]!) {
    navigationNodes(navHandle: "fieldMainNav", siteId: $siteId) {
      id
      title
      element {
        uri
        language
      }
      children {
        title
        element {
          uri
        }
      }
    }
  }
`;
