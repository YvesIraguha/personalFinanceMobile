import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import EditInput from './EditInput';

const Item = ({
  value,
  name,
  onTextChange,
  editable,
  iconName,
  placeholder
}) => {
  const handleTextChange = (text) => {
    onTextChange(name, text);
  };

  return (
    <View style={styles.itemContainer}>
      <MaterialIcons name={iconName} size={32} style={styles.fieldICon} />
      <EditInput
        value={value}
        placeholder={placeholder}
        onTextChange={handleTextChange}
        editable={editable}
      />
    </View>
  );
};

export default Item;
