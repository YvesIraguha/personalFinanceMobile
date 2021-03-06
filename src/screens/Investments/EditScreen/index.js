import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';
import imageUrl from '../../../assets/expense.jpeg';
import Item from './Components/ExpenseProperty';
import styles from './styles';
import { convertToReadableDate } from '../../../helpers/utils';
import SaveButton from './Components/SaveButton';
import useKeyboardListener from '../../customHooks/keyboardListerner';

const data = [
  {
    value: 'active'
  },
  {
    value: 'late'
  },
  {
    value: 'paid'
  }
];

const EditScreen = ({ navigation }) => {
  const [imageHeight, keyboardHeight] = useKeyboardListener();
  const [investment, setInvestment] = useState({});
  const onInputChange = (field, value) => {
    setInvestment({ ...investment, [field]: value });
  };

  useEffect(() => {
    const {
      state: {
        params: {
          name: title,
          targetAmount: price,
          initialAmount,
          createdAt: time,
          pictureUrl,
          id,
          matureDate,
          status
        }
      }
    } = navigation;
    setInvestment({
      id,
      name: title,
      date: convertToReadableDate(time),
      maturityDate: convertToReadableDate(matureDate),
      targetAmount: `${price}`,
      pictureUrl,
      status,
      initialAmount: `${initialAmount}`
    });
  }, []);

  useLayoutEffect(() => {
    navigation.setParams(investment);
  }, [investment]);

  return (
    <View style={{ paddingBottom: keyboardHeight }}>
      <ImageBackground
        source={
          investment.pictureUrl ? { uri: investment.pictureUrl } : imageUrl
        }
        imageStyle={styles.imageStyle}
        style={[styles.expenseImage, { height: imageHeight }]}
      >
        <TouchableOpacity style={styles.editButton}>
          <EvilIcons name="camera" size={56} color="white" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={[styles.itemsContainer]}>
        <Dropdown
          label="Status"
          data={data}
          onChangeText={value => {
            onInputChange('status', value);
          }}
        />
        <Item
          title="Name"
          name="name"
          value={investment.name}
          onTextChange={onInputChange}
        />
        <Item
          title="Date"
          name="date"
          value={investment.date}
          editable={false}
        />
        <Item
          title="Mature date"
          name="maturityDate"
          value={investment.maturityDate}
          editable={false}
        />
        <Item
          title="Initial amount"
          name="initialAmount"
          value={investment.initialAmount}
          onTextChange={onInputChange}
        />
        <Item
          title="Target amount"
          name="targetAmount"
          value={investment.targetAmount}
          onTextChange={onInputChange}
        />
      </View>
    </View>
  );
};

EditScreen.navigationOptions = ({ navigation }) => ({
  headerRight: <SaveButton navigation={navigation} />
});
export default EditScreen;
