import gql from "graphql-tag";

export default gql`
  mutation createUser($accessToken: String) {
    createUser(accessToken: $accessToken) {
      token
    }
  }
`;
