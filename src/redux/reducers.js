import * as actions from "./actionTypes";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTHENTICATING:
      return {
        ...state,
        authenticationInProgress: true
      };
    case actions.AUTHENTICATION_FAILURE:
      return {
        ...state,
        authenticationInProgress: false,
        errorMessage: action.payload
      };
    case actions.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        authenticationInProgress: false,
        jwtToken: action.payload
      };
    case actions.CLEAR_ERROR:
      return {
        ...state,
        authenticationInProgress: false,
        errorMessage: null
      };
    case actions.FETCHED_EXPENSES:
      return {
        ...state,
        expenses: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
