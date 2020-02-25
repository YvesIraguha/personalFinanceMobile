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

export default recordExpense;
