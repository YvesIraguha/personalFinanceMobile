import React, { useState, useLayoutEffect } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

import imageUrl from '../../../assets/expense.jpeg';
import Item from './Components/ExpenseProperty';
import styles from './styles';
import SaveButton from './Components/SaveButton';
import DateTimePicker from './Components/DateTimePicker';
import useKeboardListener from '../../customHooks/keyboardListerner';
import useImagePicker from '../../customHooks/uploadImage';

const NewInvestmentScreen = ({ navigation }) => {
  const [imageHeight, , editButtonStyles] = useKeboardListener();
  const [investment, setInvestment] = useState({});
  const [selectedImage, base64Image, pickImage] = useImagePicker();

  const onInputChange = (field, value) => {
    setInvestment({ ...investment, [field]: value });
  };

  useLayoutEffect(() => {
    navigation.setParams({ ...investment, image: base64Image });
  }, [investment, base64Image]);

  return (
    <View style={{ flex: 2 }}>
      <ImageBackground
        source={selectedImage ? { uri: selectedImage } : imageUrl}
        imageStyle={styles.imageStyle}
        style={[styles.expenseImage, { height: imageHeight }]}
      >
        <TouchableOpacity
          style={[
            styles.editButton,
            {
              height: editButtonStyles.height,
              width: editButtonStyles.width,
              borderRadius: editButtonStyles.borderRadius
            }
          ]}
          onPress={() => pickImage()}
        >
          <EvilIcons
            name="camera"
            size={editButtonStyles.iconSize}
            color="white"
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={[styles.itemsContainer, { flex: 1 }]}>
        <Item
          title="Name"
          name="name"
          iconName="person-outline"
          placeholder="Name"
          value={investment.type}
          onTextChange={onInputChange}
        />
        <Item
          title="Invested amount"
          name="initialAmount"
          iconName="attach-money"
          placeholder="Invested amount"
          value={investment.initialAmount}
          onTextChange={onInputChange}
        />
        <Item
          title="Target amount"
          name="targetAmount"
          iconName="money-off"
          placeholder="Target amount"
          value={investment.targetAmount}
          onTextChange={onInputChange}
        />
        <DateTimePicker
          title="Date"
          name="matureDate"
          iconName="perm-contact-calendar"
          placeholder="Maturity date"
          value={investment.matureDate}
          onTextChange={onInputChange}
          editable={false}
        />
      </View>
    </View>
  );
};

NewInvestmentScreen.navigationOptions = ({ navigation }) => ({
  title: 'Create new investment',
  headerRight: <SaveButton navigation={navigation} />
});

export default NewInvestmentScreen;
