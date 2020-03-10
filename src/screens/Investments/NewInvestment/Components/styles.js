import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 40,
    marginVertical: 10
  },
  fieldICon: {
    marginVertical: 8
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "400"
  },

  editInput: {
    width: 180,
    borderBottomColor: "#000000",
    borderBottomWidth: EStyleSheet.hairlineWidth
  },
  saveButton: {
    marginRight: 30
  },
  datePicker: {
    flexDirection: "row"
  },
  datePickerIcon: {
    marginLeft: "auto",
    marginTop: 20
  }
});

export default styles;
