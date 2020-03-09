import { createStackNavigator } from "react-navigation-stack";

import DetailsScreen from "./Details";
import EditScreen from "./EditScreen";
import Investments from "./index";

const InvestmentStack = createStackNavigator(
  { Investments, Details: DetailsScreen, EditScreen },
  { initialRouteName: "Investments" }
);

export default InvestmentStack;
