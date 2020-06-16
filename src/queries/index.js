import { gql } from "@apollo/client";

export const ALL_USERS = gql`
  query allUsers {
    allUsers {
      name
      username
      email
      resumes
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
