import { setContext } from "apollo-link-context";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("expertize-user-token");
  return {
    headers: { ...headers, authorization: token ? `bearer ${token}` : null },
  };
});

export default authLink;
