import ApolloClient from "apollo-boost";

// Set up apollo client
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql"
});

export default client;
