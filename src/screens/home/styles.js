import { Dimensions } from "react-native";


import EStyleSheet from 'react-native-extended-stylesheet';
const width = Dimensions.get('window').width;
const styles = EStyleSheet.create({
  container: {
    aspectRatio:97/186,
    height:undefined,
    width:Math.round(width*80/100),
    alignSelf:'center'
  },
  monthContainer:{
          flex:21,
          justifyContent:'center', 
       },
  cashFlowContainer:{
    justifyContent:'center',
flex:18,

  },
  chartContainer:{
    justifyContent:'center',
    flex:54,
  },
  expensesContainer:{
    justifyContent:'center',
    flex:93,
  },
  monthText: {
    fontSize: '18rem',
    lineHeight: '20rem'
  },
  expensesTitle: {
    fontSize: '14rem',
    fontWeight:'500',
    marginBottom: 15,
    lineHeight: '20rem'
  },
});

export default styles;
