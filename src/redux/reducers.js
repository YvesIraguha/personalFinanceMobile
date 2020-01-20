import * as actions from "./actionTypesConstants";

const initialState = {
  newExpenseModal: false,
  errors: {},
  expense: { type: "", price: "" },
  apiInProgress: 0
};

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
        errors: {}
      };
    case actions.FETCHED_EXPENSES:
      return {
        ...state,
        expenses: action.payload
      };
    case actions.INPUT_CHANGE:
      return {
        ...state,
        expense: {
          ...state.expense,
          ...action.payload
        }
      };
    case actions.NEW_EXPENSE_FAILURE:
      return {
        ...state,
        newExpenseSuccess: false,
        apiInProgress: state.apiInProgress - 1
      };
    case actions.DISPLAY_NEW_EXPENSE_MODAL:
      return {
        ...state,
        newExpenseModal: !state.newExpenseModal
      };
    case actions.NEW_EXPENSE_SUCCESS:
      return {
        ...state,
        newExpenseSuccess: true,
        apiInProgress: state.apiInProgress - 1,
        expense: { type: "", price: "" }
      };
    case actions.SET_INPUT_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.payload
        }
      };
    case actions.API_CALL_IN_PROGRESS:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };
    default:
      return state;
  }
};

export default rootReducer;
