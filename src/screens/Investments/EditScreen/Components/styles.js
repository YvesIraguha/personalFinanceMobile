import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "200"
  },
  editInput: {
    width: 180,
    borderBottomColor: "#000000",
    borderBottomWidth: 1
  },
  saveButton: {
    marginRight: 30
  }
});

export default styles;
