import React from "react";
import { connect } from "react-redux";
import { Button } from "react-native";
import styles from "./styles";
import { handleCreatingInvestment } from "../../../../redux/actionsCreators/investments";

const SaveButton = props => {
  const {
    recordInvestment,
    navigation: {
      navigate,
      state: { params: investment }
    }
  } = props;
  return (
    <Button
      style={styles.saveButton}
      title="Save"
      onPress={() => recordInvestment(investment, navigate)}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  recordInvestment: (investment, navigate) =>
    dispatch(handleCreatingInvestment(investment, navigate))
});

export default connect(
  null,
  mapDispatchToProps
)(SaveButton);
