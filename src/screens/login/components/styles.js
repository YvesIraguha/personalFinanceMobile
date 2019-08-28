import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red"
  },
  loginButton: {
    backgroundColor: "rgba(165, 200, 115,0.1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10
  },
  loginText: {
    color: "#8E20E3",
    marginLeft: 5,
    fontSize: 18
  },
  loginIcon: {
    width: 20,
    height: undefined,
    aspectRatio: 1 / 1
  }
});

export default styles;
