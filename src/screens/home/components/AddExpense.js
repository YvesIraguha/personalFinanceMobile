import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import plusIcon from "../../../assets/add.png";
import styles from "./styles";
import { displayNewExpenseModal } from "../../../redux/createExpense";

class AddExpense extends Component {
  _renderModal = () => {
    const { displayModal } = this.props;
    displayModal();
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this._renderModal()}>
        <Image source={plusIcon} style={styles.plusIcon} resizeMode="contain" />
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
