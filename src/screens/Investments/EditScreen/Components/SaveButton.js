import React from "react";
import { connect } from "react-redux";
import { Button } from "react-native";
import styles from "./styles";
import { handleEditingInvestment } from "../../../../redux/actionsCreators/investments";

const SaveButton = props => {
  const {
    editInvestment,
    navigation: {
      navigate,
      state: { params: investment }
    }
  } = props;
  return (
    <Button
      style={styles.saveButton}
      title="Save"
      onPress={() => editInvestment(investment, navigate)}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  editInvestment: (investment, navigate) =>
    dispatch(handleEditingInvestment(investment, navigate))
});

export default connect(
  null,
  mapDispatchToProps
)(SaveButton);
