import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation signup(
    $username: String!
    $password: String!
    $name: String!
    $email: String!
  ) {
    signup(
      username: $username
      password: $password
      name: $name
      email: $email
    ) {
      token
      currentUser {
        username
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      currentUser {
        username
      }
    }
  }
`;
