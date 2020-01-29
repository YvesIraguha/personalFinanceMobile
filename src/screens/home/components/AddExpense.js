import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

import styles from "./styles";
import { displayNewExpenseModal } from "../../../redux/createExpense";

class AddExpense extends Component {
  _renderModal = () => {
    const { displayModal } = this.props;
    displayModal();
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this._renderModal()}
        style={styles.addExpense}
      >
        <Ionicons name="md-add-circle" size={70} color="#3E6BBA" />
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
