import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { handleInputChange } from '../../../redux/createExpense.js';

class Input extends Component {
  _handleOnChangeInput = value => {
    const { inputChangeHandler, name } = this.props;
    inputChangeHandler(name.toLowerCase(), value);
  };

  render() {
    return (
      <TextInput
        placeholder="Type here"
        style={styles.input}
        onChangeText={text => this._handleOnChangeInput(text)}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  inputChangeHandler: (name, value) => dispatch(handleInputChange(name, value)),
});

export default connect(
  null,
  mapDispatchToProps
)(Input);
