import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import cancelIcon from "../../../assets/cancel.png";
import InputContainer from "./InputContainer";
import styles from "./styles";
import {
  handleExpenseCreation,
  displayNewExpenseModal
} from "../../../redux/createExpense";
import { validateExpense } from "../../../helpers/validator";

class NewExpense extends Component {
  _handleNewExpense = () => {
    const { recordNewExpense, expense, displayModal } = this.props;
    displayModal();
    recordNewExpense(expense);
  };

  _renderModal = () => {
    const { displayModal } = this.props;
    displayModal();
  };

  _displayError = () => {
    let error = "";
    const { errors } = this.props;
    Object.keys(errors).map(key => {
      if (errors[key]) {
        error = errors[key];
        return error;
      }
    });
    return error;
  };

  render() {
    const { newExpenseModal, errors, expense } = this.props;
    const isActive = validateExpense(errors, expense);
    return (
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={newExpenseModal}
          coverScreen
          backdropColor="rgba(151,127,127,0.5)"
          onBackdropPress={this._renderModal}
        >
          <View style={styles.nexExpenseContainer}>
            <TouchableOpacity
              onPress={this._renderModal}
              style={styles.cancelIconContainer}
            >
              <Image style={styles.cancelIcon} source={cancelIcon} />
            </TouchableOpacity>
            <Text style={styles.newExpenseTitle}>New spending</Text>
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>{this._displayError()}</Text>
            </View>
            <View style={styles.inputsContainer}>
              <InputContainer title="Type" />
              <InputContainer title="Quantity" />
              <InputContainer title="Price" />
            </View>
            <View style={styles.saveButtonContainer}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={this._handleNewExpense}
                disabled={!isActive}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = ({ expense, newExpenseModal, errors }) => ({
  expense,
  newExpenseModal,
  errors
});
const mapDispatchToProps = dispatch => ({
  recordNewExpense: expense => dispatch(handleExpenseCreation(expense)),
  displayModal: () => dispatch(displayNewExpenseModal())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewExpense);
