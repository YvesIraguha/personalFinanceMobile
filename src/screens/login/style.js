import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },
  logoContainer: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoImage: {
    height: undefined,
    aspectRatio: 1 / 1,
    width: '170rem'
  },
  logoText: {
    textAlign: "center",
    color: "#E32D20",
    marginVertical: 15,
    fontWeight: "900",
    fontSize:'20rem',
    letterSpacing: -1
  }
});

export default styles;
