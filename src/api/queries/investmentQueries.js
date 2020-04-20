import gql from "graphql-tag";

export const deleteInvestmentQuery = gql`
  mutation deletedInvestment($id: String!) {
    deleteInvestment(id: $id) {
      name
    }
  }
`;

export const editInvestmentQuery = gql`
  mutation updateInvestment(
    $id: String!
    $name: String
    $initialAmount: Int
    $targetAmount: Int
  ) {
    updateInvestment(
      id: $id
      name: $name
      initialAmount: $initialAmount
      targetAmount: $targetAmount
    ) {
      name
      initialAmount
      targetAmount
      id
      matureDate
      pictureUrl
      createdAt
    }
  }
`;
export const createInvestmentQuery = gql`
  mutation createInvestment(
    $name: String!
    $initialAmount: Int!
    $targetAmount: Int!
    $matureDate: String!
    $pictureUrl: String
  ) {
    createInvestment(
      name: $name
      initialAmount: $initialAmount
      targetAmount: $targetAmount
      matureDate: $matureDate
      pictureUrl: $pictureUrl
    ) {
      id
      name
      initialAmount
      targetAmount
      matureDate
      createdAt
      pictureUrl
      owner {
        firstName
        lastName
      }
    }
  }
`;

export const getAllInvestmentsQuery = gql`
  query getAllInvestments($startDate: String, $endDate: String) {
    getAllInvestments(startDate: $startDate, endDate: $endDate) {
      name
      matureDate
      initialAmount
      targetAmount
      id
      createdAt
      pictureUrl
    }
  }
`;
