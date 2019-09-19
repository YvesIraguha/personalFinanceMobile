import * as actions from './actionTypes';
import { recordExpense } from '../api/createExpense';

export const handleInputChange = (name, value) => ({
  type: actions.INPUT_CHANGE,
  payload: { [name]: value },
});

export const handleExpenseCreation = ({ expense }) => async dispatch => {
  try {
    const newExpense = await recordExpense(expense);
  } catch (error) {}
};
