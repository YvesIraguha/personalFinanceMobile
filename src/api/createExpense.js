import { BACKEND_URL_DEV } from "react-native-dotenv";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { AsyncStorage } from "react-native";

const client = new ApolloClient({
  uri: BACKEND_URL_DEV,
  fetchOptions: {
    credentials: "include"
  },
  request: async operation => {
    const token = await AsyncStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token || ""
      }
    });
  }
});

const createExpenseQuery = gql`
  mutation createExpense($type: String!, $price: Int!) {
    createExpense(type: $type, price: $price) {
      type
      quantity
      price
      id
      createdAt
    }
  }
`;

const deleteExpenseQuery = gql`
  mutation deletedExpense($id: String!) {
    deleteExpense(id: $id) {
      type
    }
  }
`;

const editExpenseQuery = gql`
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

const createInvestmentQuery = gql`
  mutation createInvestment(
    $name: String!
    $initialAmount: Int!
    $targetAmount: Int!
    $matureDate: String!
  ) {
    createInvestment(
      name: $name
      initialAmount: $initialAmount
      targetAmount: $targetAmount
      matureDate: $matureDate
    ) {
      name
      initialAmount
      targetAmount
      matureDate
      createdAt
      owner {
        firstName
        lastName
      }
    }
  }
`;

export const recordExpense = async ({ type, price }) => {
  try {
    const newExpense = await client.mutate({
      mutation: createExpenseQuery,
      variables: { type, price: parseInt(price, 10) }
    });

    return newExpense;
  } catch (error) {
    throw new Error("Error is happening");
  }
};
export const deleteExpense = async id => {
  try {
    const deletedExpense = await client.mutate({
      mutation: deleteExpenseQuery,
      variables: { id }
    });

    return deletedExpense;
  } catch (error) {
    throw new Error("Error is happening");
  }
};

export const editExpense = async ({ id, type, quantity, price }) => {
  try {
    const editedExpense = await client.mutate({
      mutation: editExpenseQuery,
      variables: {
        type,
        price: parseInt(price, 10),
        quantity: parseInt(quantity, 10),
        id
      }
    });
    return editedExpense;
  } catch (error) {
    throw new Error("Error is happening");
  }
};

export const recordInvestment = async ({
  name,
  initialAmount,
  targetAmount,
  matureDate
}) => {
  try {
    const newInvestment = await client.mutate({
      mutation: createInvestmentQuery,
      variables: {
        name,
        initialAmount: parseInt(initialAmount, 10),
        targetAmount: parseInt(targetAmount, 10),
        matureDate
      }
    });
    return newInvestment;
  } catch (error) {
    throw new Error("Error is happening");
  }
};

export default recordExpense;
