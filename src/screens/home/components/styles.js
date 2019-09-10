import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    fontSize: 13
  },
  headerImage: {
    marginLeft: 5,
    borderRadius: 15,
    height: undefined,
    aspectRatio: 1,
    width: 32
  },
  cashFlowContainer:{
    marginBottom:15
  },
expenseContainer:{
  marginVertical:10,
  justifyContent:"space-around"
},
plusIcon:{
  width:32,
  height:32,
  tintColor:'rgba(0, 0, 0, 0.54)',
  marginTop:10,
  marginLeft:20
}
});

export default styles;
