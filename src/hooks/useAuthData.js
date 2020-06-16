import { useApolloClient } from "@apollo/client";
import { CURRENT_USER } from "../queries";

const useAuthData = (authData) => {
  const client = useApolloClient();
  if (authData) {
    const { token, currentUser } = authData[Object.keys(authData)[0]]; //Necessary bc keys are different for signup and login
    localStorage.setItem("expertize-user-token", token);
    client.writeQuery({
      query: CURRENT_USER,
      data: { currentUser },
    });

    return { token, currentUser };
  }

  return null;
};

export default useAuthData;
