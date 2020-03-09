import * as actions from "../actionTypesConstants";
import {
  recordExpense,
  editExpense,
  deleteExpense,
  getExpenses
} from "../../api/controllers/expenses";

export const apiCallInProgress = () => ({ type: actions.API_CALL_IN_PROGRESS });

export const handleExpenseCreation = expense => async dispatch => {
  dispatch(apiCallInProgress());
  try {
    const newExpense = await recordExpense(expense);

    dispatch({ type: actions.NEW_EXPENSE_SUCCESS, payload: { newExpense } });
    dispatch({
      type: actions.NEW_EXPENSE_COMPLETED,
      payload: newExpense.data.createExpense
    });
  } catch (error) {
    dispatch({
      type: actions.NEW_EXPENSE_FAILURE,
      payload: { error: error.message }
    });
  }
};

export const handleEditingExpense = (expense, navigate) => async dispatch => {
  dispatch(apiCallInProgress());
  try {
    const {
      data: { updateExpense: result }
    } = await editExpense(expense);
    dispatch({ type: actions.EDIT_EXPENSE_SUCCESS, payload: result });
    navigate("Expenses");
  } catch (error) {
    dispatch({
      type: actions.EDIT_EXPENSE_FAILURE,
      payload: { error: error.message }
    });
  }
};

export const handleDeletingExpense = (id, navigate) => async dispatch => {
  dispatch(apiCallInProgress());
  try {
    const {
      data: { deleteExpense: result }
    } = await deleteExpense(id);

    dispatch({
      type: actions.DELETE_EXPENSE_SUCCESS,
      payload: { ...result, id }
    });
    navigate("Expenses");
  } catch (error) {
    dispatch({
      type: actions.DELETE_EXPENSE_FAILURE,
      payload: { error: error.message }
    });
  }
};

export const fetchExpenses = () => async dispatch => {
  try {
    dispatch({ type: actions.API_CALL_IN_PROGRESS });
    const { data } = await getExpenses();
    dispatch({ type: actions.FETCHED_EXPENSES, payload: data });
  } catch (error) {
    dispatch({
      type: actions.AUTHENTICATION_FAILURE,
      payload: "contacted an error"
    });
  }
};
