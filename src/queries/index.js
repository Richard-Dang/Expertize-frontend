import { gql } from "@apollo/client";

export const ALL_USERS = gql`
  query allUsers {
    allUsers {
      name
      username
      email
    }
  }
`;

export const ALL_RESUMES = gql`
  query allResumes {
    allResumes {
      title
      date
      data
      likes
      description
      tags
      user
    }
  }
`;

export const CURRENT_USER = gql`
  query currentUser {
    currentUser {
      name
      username
      email
    }
  }
`;
