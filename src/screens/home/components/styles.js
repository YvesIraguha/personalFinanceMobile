import { StyleSheet } from "react-native";

import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
  },
  cashContainer: {
    marginLeft: 10
  },
  editImage: {
    marginLeft: 5,
    height: undefined,
    aspectRatio: 1,
    width: 15
  },
  text: {
    fontSize: '13rem'
  },
  headerImage: {
    marginLeft: 5,
    borderRadius: 15,
    height: undefined,
    aspectRatio: 1,
    width: 32
  },
expenseContainer:{
  marginVertical:10,
  justifyContent:"space-around"
},
plusIcon:{
  height:undefined,
  aspectRatio:1,
  width:'32rem',
  
  tintColor:'rgba(0, 0, 0, 0.54)',
  marginTop:10,
  marginLeft:'20rem'
}
});

export default styles;
