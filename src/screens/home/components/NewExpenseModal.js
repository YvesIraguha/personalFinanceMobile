import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import cancelIcon from '../../../assets/cancel.png';
import InputContainer from './InputContainer';
import styles from './styles';

class NewExpense extends Component {
  state = { isModalVisible: true };

  _renderModal = () => {
    const { isModalVisible } = this.state;
    this.setState({ isModalVisible: !isModalVisible });
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
              <TouchableOpacity style={styles.saveButton} onPress={this._renderModal}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default NewExpense;
