import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import editButton from '../../../assets/edit.png';
import deleteIcon from '../../../assets/delete.png';

export default () => (
  <View style={[styles.container, styles.expenseContainer]}>
    <View style={[styles.container, styles.cashContainer]}>
      <Text style={styles.text}>Pants</Text>
      <Image source={editButton} resizeMode="contain" style={styles.editImage} />
    </View>
    <View style={[styles.container, styles.cashContainer]}>
      <Text style={styles.text}>2000Rwf</Text>
      <Image source={editButton} resizeMode="contain" style={styles.editImage} />
    </View>
    <Image
      source={deleteIcon}
      resizeMode="contain"
      style={[styles.editImage, { tintColor: 'rgba(227,45,32,0.45)' }]}
    />
  </View>
);
