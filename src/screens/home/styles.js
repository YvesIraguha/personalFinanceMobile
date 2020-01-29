import { Dimensions } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

const { width } = Dimensions.get("window");
const styles = EStyleSheet.create({
  container: {
    width: Math.round((width * 95) / 100)
  },
  indicatorContainer: {
    alignItems: "center"
  },
  expensesContainer: {
    marginTop: 10
  },
  sectionHeader: {
    fontSize: "17rem",
    lineHeight: "20rem",
    padding: 15,
    backgroundColor: "#fff"
  }
});

export default styles;
