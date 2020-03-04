import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  logoContainer: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoImage: {
    height: undefined,
    aspectRatio: 2 / 3,
    width: "250rem"
  }
});

export default styles;
