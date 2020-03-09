import * as actions from "../actionTypesConstants";
import {
  recordInvestment,
  editInvestment,
  deleteInvestment,
  getInvestments
} from "../../api/controllers/investments";

const apiCallInProgress = () => ({ type: actions.API_CALL_IN_PROGRESS });

export const handleCreatingInvestment = (
  investment,
  navigate
) => async dispatch => {
  dispatch(apiCallInProgress());
  try {
    const {
      data: { createInvestment: result }
    } = await recordInvestment(investment);

    dispatch({
      type: actions.RECORD_INVESTMENT_SUCCESS,
      payload: result
    });

    navigate("Investments");
  } catch (error) {
    dispatch({
      type: actions.RECORD_INVESTMENT_FAILURE,
      payload: { error: error.message }
    });
  }
};

export const handleEditingInvestment = (
  investment,
  navigate
) => async dispatch => {
  dispatch(apiCallInProgress());
  try {
    const {
      data: { updateInvestment: result }
    } = await editInvestment(investment);
    dispatch({ type: actions.EDIT_INVESTMENT_SUCCESS, payload: result });
    navigate("Investments");
  } catch (error) {
    dispatch({
      type: actions.EDIT_INVESTMENT_FAILURE,
      payload: { error: error.message }
    });
  }
};

export const handleDeletingInvestment = (id, navigate) => async dispatch => {
  dispatch(apiCallInProgress());
  try {
    const {
      data: { deleteInvestment: result }
    } = await deleteInvestment(id);

    dispatch({
      type: actions.DELETE_INVESTMENT_SUCCESS,
      payload: { ...result, id }
    });
    navigate("Investments");
  } catch (error) {
    dispatch({
      type: actions.DELETE_INVESTMENT_FAILURE,
      payload: { error: error.message }
    });
  }
};

export const fetchInvestments = () => async dispatch => {
  try {
    dispatch({ type: actions.API_CALL_IN_PROGRESS });
    const { data } = await getInvestments();
    dispatch({ type: actions.FETCH_INVESTMENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actions.AUTHENTICATION_FAILURE,
      payload: "contacted an error"
    });
  }
};
