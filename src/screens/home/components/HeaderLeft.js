import React, { Component } from 'react';
import { View, Image } from 'react-native';
import moreIcon from '../../../assets/moreIcon.png';

import styles from './styles';

export default class HeaderRight extends Component {
  render() {
    return (
      <View>
        <Image source={moreIcon} resizeMode="contain" style={styles.headerImage} />
      </View>
    );
  }
}
