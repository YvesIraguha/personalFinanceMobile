import { BACKEND_URL_DEV } from "react-native-dotenv";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { AsyncStorage } from "react-native";
import * as actions from "./actionTypesConstants";
import { getAccessToken } from "../services/auth";

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

const createUserQuery = gql`
  mutation createUser($accessToken: String) {
    createUser(accessToken: $accessToken) {
      token
    }
  }
`;

const getAllExpenses = gql`
  query {
    getAllExpenses {
      type
      quantity
      price
      id
      createdAt
    }
  }
`;

const clearError = () => ({
  type: actions.CLEAR_ERROR
});

export const authenticateUser = navigation => async dispatch => {
  dispatch(clearError());
  try {
    dispatch({ type: actions.AUTHENTICATING });

    const { accessToken } = await getAccessToken();

    const {
      data: {
        createUser: { token }
      }
    } = await client.mutate({
      mutation: createUserQuery,
      variables: { accessToken }
    });
    await AsyncStorage.setItem("token", token);

    dispatch({
      type: actions.AUTHENTICATION_SUCCESS,
      payload: { jwtToken: token }
    });
    navigation.navigate("Home");
  } catch (error) {
    dispatch({
      type: actions.AUTHENTICATION_FAILURE,
      payload: "Unable to authenticate you"
    });
  }
};

export const fetchExpenses = () => async dispatch => {
  try {
    dispatch({ type: actions.API_CALL_IN_PROGRESS });
    const { data } = await client.query({
      query: getAllExpenses
    });
    dispatch({ type: actions.FETCHED_EXPENSES, payload: data });
  } catch (error) {
    dispatch({
      type: actions.AUTHENTICATION_FAILURE,
      payload: "contacted an error"
    });
  }
};
