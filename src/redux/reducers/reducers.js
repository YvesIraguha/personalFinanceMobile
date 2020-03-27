import * as actions from "../actionTypesConstants";

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
        apiInProgress: state.apiInProgress - 1,
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
    case actions.NEW_EXPENSE_COMPLETED:
      return {
        ...state,
        expenses: {
          getAllExpenses: [action.payload, ...state.expenses.getAllExpenses]
        }
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
    case actions.EDIT_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: {
          getAllExpenses: state.expenses.getAllExpenses.map(item => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          })
        },

        editExpenseSuccess: true,
        apiInProgress: state.apiInProgress - 1
      };
    case actions.EDIT_EXPENSE_FAILURE:
      return {
        ...state,
        editExpenseSuccess: false,
        apiInProgress: state.apiInProgress - 1
      };
    case actions.DELETE_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: {
          getAllExpenses: state.expenses.getAllExpenses.filter(
            item => item.id !== action.payload.id
          )
        },
        deleteExpenseSuccess: true,
        apiInProgress: state.apiInProgress - 1
      };
    case actions.DELETE_EXPENSE_FAILURE:
      return {
        ...state,
        deleteExpenseSuccess: false,
        apiInProgress: state.apiInProgress - 1
      };
    case actions.FETCH_INVESTMENTS_SUCCESS:
      return {
        ...state,
        apiInProgress: state.apiInProgress - 1,
        investments: action.payload
      };
    case actions.FETCH_INVESTMENTS_FAILURE:
      return {
        ...state,
        apiInProgress: state.apiInProgress - 1,
        investmentsError: action.payload
      };
    case actions.RECORD_INVESTMENT_SUCCESS:
      return {
        ...state,
        newInvestmentSuccess: true,
        apiInProgress: state.apiInProgress - 1,
        investments: {
          getAllInvestments: [
            action.payload,
            ...state.investments.getAllInvestments
          ]
        }
      };
    case actions.RECORD_INVESTMENT_FAILURE:
      return {
        ...state,
        newInvestmentSuccess: false,
        apiInProgress: state.apiInProgress - 1
      };
    case actions.EDIT_INVESTMENT_SUCCESS:
      return {
        ...state,
        investments: {
          getAllInvestments: state.Investments.getAllInvestments.map(item => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          })
        },

        editINVESTMENTSuccess: true,
        apiInProgress: state.apiInProgress - 1
      };
    case actions.EDIT_INVESTMENT_FAILURE:
      return {
        ...state,
        editINVESTMENTSuccess: false,
        apiInProgress: state.apiInProgress - 1
      };
    case actions.DELETE_INVESTMENT_SUCCESS:
      return {
        ...state,
        investments: {
          getAllInvestments: state.investments.getAllInvestments.filter(
            item => item.id !== action.payload.id
          )
        },
        deleteInvestmentSuccess: true,
        apiInProgress: state.apiInProgress - 1
      };
    case actions.DELETE_INVESTMENT_FAILURE:
      return {
        ...state,
        deleteInvestmentSuccess: false,
        apiInProgress: state.apiInProgress - 1
      };
    default:
      return state;
  }
};

export default rootReducer;
