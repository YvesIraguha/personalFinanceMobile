import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import cancelIcon from '../../../assets/cancel.png';
import InputContainer from './InputContainer';
import styles from './styles';
import { handleExpenseCreation } from '../../../redux/createExpense';

class NewExpense extends Component {
  state = { isModalVisible: true };

  _renderModal = () => {
    const { isModalVisible } = this.state;
    this.setState({ isModalVisible: !isModalVisible });
  };

  _handleNewExpense = () => {
    const { recordNewExpense, expense } = this.props;
    this._renderModal();
    recordNewExpense(expense);
  };

  render() {
    const { isModalVisible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={isModalVisible}
          coverScreen
          backdropColor="rgba(151,127,127,0.5)"
          onBackdropPress={this._renderModal}
        >
          <View style={styles.nexExpenseContainer}>
            <Image style={styles.cancelIcon} source={cancelIcon} onPress={this._renderModal} />
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

const mapStateToProps = expense => ({
  expense,
});
const mapDispatchToProps = dispatch => ({
  recordNewExpense: expense => dispatch(handleExpenseCreation(expense)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewExpense);
