import * as actions from "./actionTypesConstants";
import { validateInputs } from "../helpers/validator";

export const setInputError = (name, value) => ({
  type: actions.SET_INPUT_ERROR,
  payload: validateInputs(name, value)
});

export const handleInputChange = (name, value) => dispatch => {
  dispatch(setInputError(name, value));
  dispatch({ type: actions.INPUT_CHANGE, payload: { [name]: value } });
};

export const displayNewExpenseModal = () => ({
  type: actions.DISPLAY_NEW_EXPENSE_MODAL
});
