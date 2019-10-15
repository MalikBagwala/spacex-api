import gql from "graphql-tag";

const LAUNCHPAD_LIST = gql`
  query launchpadList($limit: Int, $offset: Int) {
    landpads(limit: $limit, offset: $offset) {
      id
      details
      status
      wikipedia
      attempted_landings
      successful_landings
      location {
        region
        latitude
        longitude
        name
      }
    }
  }
`;

export { LAUNCHPAD_LIST };
