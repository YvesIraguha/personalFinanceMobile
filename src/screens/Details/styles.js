import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  expenseImage: {
    width: "100%",
    backgroundColor: "rgb(0,0,0)",
    justifyContent: "flex-end",
    height: "55%"
  },
  imageStyle: {
    height: "100%",
    opacity: 0.6
  },
  titleStyle: {
    color: "white",
    margin: 20,
    fontSize: 24,
    fontWeight: "600"
  },
  itemsContainer: { height: "40%", paddingVertical: 20, marginHorizontal: 30 },
  editButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    width: 56,
    borderRadius: 28,
    right: 40,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 14
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 10,
    backgroundColor: "#009688",
    bottom: 30
  }
});

export default styles;
