import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

import styles from "./styles";
import { displayNewExpenseModal } from "../../../redux/createExpense";

class AddExpense extends Component {
  renderModal = () => {
    const { displayModal } = this.props;
    displayModal();
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.renderModal()}
        style={styles.addExpense}
      >
        <Ionicons name="md-add-circle" size={70} color="#009688" />
      </TouchableOpacity>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  displayModal: () => dispatch(displayNewExpenseModal())
});

export default connect(
  null,
  mapDispatchToProps
)(AddExpense);
