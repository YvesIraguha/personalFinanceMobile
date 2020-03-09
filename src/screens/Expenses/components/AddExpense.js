import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

import styles from "./styles";
import { displayNewExpenseModal } from "../../../redux/inputHandler";

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
        <Ionicons name="ios-add" size={30} color="white" />
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
