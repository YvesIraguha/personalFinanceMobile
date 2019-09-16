import React, { Component } from 'react'
import { Image,TouchableHighlight} from 'react-native'
import plusIcon from '../../../assets/add.png'
import styles from './styles'
export default class AddExpense extends Component {
    render() {
        return (
            <TouchableHighlight>
              <Image source={plusIcon} style={styles.plusIcon} resizeMode="contain" />  
            </TouchableHighlight>
        )
    }
}
