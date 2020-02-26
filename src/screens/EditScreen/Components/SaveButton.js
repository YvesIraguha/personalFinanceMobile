import React from "react";
import { connect } from "react-redux";
import { Button } from "react-native";
import styles from "./styles";
import { handleEditingExpense } from "../../../redux/createExpense";

const SaveButton = props => {
  const {
    editExpense,
    navigation: {
      state: { params: expense }
    }
  } = props;

  return (
    <Button
      style={styles.saveButton}
      title="Save"
      onPress={() => editExpense(expense)}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  editExpense: expense => dispatch(handleEditingExpense(expense))
});

export default connect(
  null,
  mapDispatchToProps
)(SaveButton);
