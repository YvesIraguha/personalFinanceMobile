import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import cancelIcon from '../../../assets/cancel.png';
import InputContainer from './InputContainer';
import styles from './styles';
import { handleExpenseCreation, displayNewExpenseModal } from '../../../redux/createExpense';

class NewExpense extends Component {
  state = {
    isModalVisible: false,
  };

  _handleNewExpense = () => {
    const { recordNewExpense, expense, displayModal } = this.props;
    displayModal();
    recordNewExpense(expense);
  };

  _renderModal = () => {
    const { displayModal } = this.props;
    displayModal();
  };

  render() {
    const { isModalVisible } = this.state;
    const { newExpenseModal } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={newExpenseModal}
          coverScreen
          backdropColor="rgba(151,127,127,0.5)"
          onBackdropPress={this._renderModal}
        >
          <View style={styles.nexExpenseContainer}>
            <TouchableOpacity onPress={this._renderModal} style={styles.cancelIconContainer}>
              <Image style={styles.cancelIcon} source={cancelIcon} />
            </TouchableOpacity>
            <Text style={styles.newExpenseTitle}>New spending</Text>
            <View style={styles.inputsContainer}>
              <InputContainer title="Type" />
              <InputContainer title="Quantity" />
              <InputContainer title="Price" />
            </View>
            <View style={styles.saveButtonContainer}>
              <TouchableOpacity style={styles.saveButton} onPress={this._handleNewExpense}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = ({ expense, newExpenseModal }) => ({
  expense,
  newExpenseModal,
});
const mapDispatchToProps = dispatch => ({
  recordNewExpense: expense => dispatch(handleExpenseCreation(expense)),
  displayModal: () => dispatch(displayNewExpenseModal()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewExpense);
