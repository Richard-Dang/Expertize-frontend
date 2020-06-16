import { onError } from "apollo-link-error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, path }) =>
      console.error(`[GraphQL error]: Message: ${message}, Path: ${path}`)
    );
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

export default errorLink;
