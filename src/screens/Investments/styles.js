import { Dimensions } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

const { width, height } = Dimensions.get("window");
const styles = EStyleSheet.create({
  container: {
    height: Math.round((height * 90) / 100),
    width: Math.round((width * 95) / 100),
    marginLeft: Math.round((width * 5) / 200)
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
  },
  emptyBucketContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },

  empty: {
    height: undefined,
    aspectRatio: 1 / 1,
    width: Math.round((width * 90) / 100)
  },
  emptyText: {
    textAlign: "center",
    color: "rgba(0,0,0,0.6)"
  }
});

export default styles;
