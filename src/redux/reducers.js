import * as actions from './actionTypes';

const initialState = { newExpenseModal: false };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTHENTICATING:
      return {
        ...state,
        authenticationInProgress: true,
      };
    case actions.AUTHENTICATION_FAILURE:
      return {
        ...state,
        authenticationInProgress: false,
        errorMessage: action.payload,
      };
    case actions.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        authenticationInProgress: false,
        jwtToken: action.payload,
      };
    case actions.CLEAR_ERROR:
      return {
        ...state,
        authenticationInProgress: false,
        errorMessage: null,
      };
    case actions.FETCHED_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
      };
    case actions.INPUT_CHANGE:
      return {
        ...state,
        expense: {
          ...state.expense,
          ...action.payload,
        },
      };
    case actions.NEW_EXPENSE_FAILURE:
      return {
        ...state,
        expense: {
          newExpenseFailure: true,
          ...action.payload,
        },
      };
    case actions.DISPLAY_NEW_EXPENSE_MODAL:
      return {
        ...state,
        newExpenseModal: !state.newExpenseModal,
      };
    case actions.NEW_EXPENSE_SUCCESS:
      return {
        ...state,
        expense: {
          newExpenseSuccess: true,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
