import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red"
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#617BE3",
    padding: 15,
    paddingHorizontal: 40,
    marginTop: 10,
    borderRadius: 1
  },
  loginText: {
    color: "#617BE3",
    marginLeft: 10,
    fontSize: 18
  },
  loginIcon: {
    width: 20,
    height: undefined,
    aspectRatio: 1 / 1
  }
});

export default styles;
