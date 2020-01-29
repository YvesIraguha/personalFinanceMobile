import { Dimensions } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

const { width } = Dimensions.get("window");
const styles = EStyleSheet.create({
  container: {
    // aspectRatio: 97 / 186,
    // height: undefined,
    width: Math.round((width * 95) / 100)
    // margin: "auto"
  },
  monthCashIndicatorContainer: {
    // flex: 39,
    flexDirection: "row"
  },
  monthCashContainer: {
    // flex: 39,
    flexDirection: "column"
  },
  indicatorContainer: {
    alignItems: "center"
  },
  monthContainer: {
    // flex: 21,
    justifyContent: "center"
  },
  cashFlowContainer: {
    justifyContent: "center"
    // flex: 18
  },
  chartContainer: {
    justifyContent: "center"
    // flex: 54
  },
  expensesContainer: {
    // justifyContent: "center",
    marginTop: 10
    // flex: 93,
  },
  monthText: {
    fontSize: "18rem",
    lineHeight: "20rem"
  },
  expensesTitle: {
    fontSize: "14rem",
    fontWeight: "500",
    marginTop: 25,
    lineHeight: "20rem"
  }
});

export default styles;
