import React from "react";
import { connect } from "react-redux";
import { Button } from "react-native";
import styles from "./styles";
import { handleEditingExpense } from "../../../redux/createExpense";

const SaveButton = props => {
  const {
    editExpense,
    navigation: {
      navigate,
      state: { params: expense }
    }
  } = props;
  return (
    <Button
      style={styles.saveButton}
      title="Save"
      onPress={() => editExpense(expense, navigate)}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  editExpense: (expense, navigate) =>
    dispatch(handleEditingExpense(expense, navigate))
});

export default connect(
  null,
  mapDispatchToProps
)(SaveButton);
