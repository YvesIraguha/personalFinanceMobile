import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoImage: {
    borderRadius: 25,
    marginVertical: 50,
    height: undefined,
    aspectRatio: 1 / 1,
    width: 50
  },
  logoText: {
    textAlign: "center",
    color: "#E32D20",
    marginVertical: 45,
    fontWeight: "900",
    fontSize: 36,
    letterSpacing: -1
  }
});

export default styles;
