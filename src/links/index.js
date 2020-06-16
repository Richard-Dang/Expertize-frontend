import { ApolloLink } from "@apollo/client";
import errorLink from "./errorLink";
import authLink from "./authLink";
import httpLink from "./httpLink";

const link = ApolloLink.from([authLink, errorLink, httpLink]);

export default link;
