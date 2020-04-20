import EStyleSheet from "react-native-extended-stylesheet";

import { StyleSheet } from "react-native";

const imageDimensions = (width, aspectRatio) => ({
  height: undefined,
  aspectRatio,
  width,
});

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
  },
  cashContainer: {
    marginLeft: 10,
  },
  moreIcon: {
    marginLeft: 5,
    ...imageDimensions(15, 1),
  },
  text: {
    fontSize: "13rem",
  },
  headerImage: {
    marginLeft: 5,
    borderRadius: 15,
    ...imageDimensions(32, 1),
  },
  expenseContainer: {
    flex: 13,
    marginVertical: 2,
  },
  expenseAvatarContainer: {
    flex: 2,
    alignItems: "center",
    margin: 10,
  },
  expenseAvatar: {
    marginHorizontal: 20,
    ...imageDimensions("40rem", 1),
    borderRadius: "20rem",
  },
  profileAvatar: {
    marginLeft: 20,
    ...imageDimensions("38rem", 1),
    borderRadius: "19rem",
  },
  data: {
    flexDirection: "row",
    paddingVertical: 5,
    flex: 11,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontWeight: "200",
    marginRight: 10,
    fontSize: 12,
  },
  title: {
    fontWeight: "300",
    marginBottom: 5,
    fontSize: 16,
  },
  price: {
    fontWeight: "200",
    fontSize: 13,
  },

  inputsContainer: { alignSelf: "center", margin: 10 },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "10rem",
  },
  inputLabel: {
    fontSize: "15rem",
    fontWeight: "100",
  },
  input: {
    marginLeft: 10,
    marginVertical: 10,
  },
  btns: {
    width: 150,
    flexDirection: "row",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "900",
  },
  errorContainer: {
    height: 20,
    marginTop: 10,
    alignItems: "center",
  },
  errorMessage: {
    color: "red",
  },
  addInvestmentBtn: {
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
      height: 14,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 10,
    backgroundColor: "#009688",
    bottom: 30,
  },

  dateInput: {
    backgroundColor: "white",
    width: 150,
    borderBottomColor: "#000000",
    borderBottomWidth: EStyleSheet.hairlineWidth,
  },
  datePicker: {
    flexDirection: "row",
  },
  filterContainer: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  filterBtn: {
    marginTop: 15,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "#009688",
    borderColor: "#009688",
  },
  filterText: {
    color: "white",
    padding: 5,
  },
  clearButton: {
    backgroundColor: "#E32D20",
    borderColor: "#E32D20",
  },
  datePickerIcon: { marginLeft: "auto", marginTop: 10 },
});

export default styles;
