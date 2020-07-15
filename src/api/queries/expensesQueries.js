import gql from 'graphql-tag';

export const createExpenseQuery = gql`
  mutation createExpense($type: String!, $price: Int!, $parentId: String) {
    createExpense(type: $type, price: $price, parentId: $parentId) {
      type
      quantity
      price
      id
      createdAt
      parentId
    }
  }
`;

export const deleteExpenseQuery = gql`
  mutation deletedExpense($id: String!) {
    deleteExpense(id: $id) {
      type
    }
  }
`;

export const editExpenseQuery = gql`
  mutation updateExpense(
    $id: String!
    $type: String
    $quantity: Int
    $price: Int
  ) {
    updateExpense(id: $id, type: $type, quantity: $quantity, price: $price) {
      type
      quantity
      price
      id
      createdAt
    }
  }
`;

export const getAllExpensesQuery = gql`
  query {
    getAllExpenses {
      type
      quantity
      price
      id
      parentId
      createdAt
    }
  }
`;
