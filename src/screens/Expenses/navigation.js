import { createStackNavigator } from "react-navigation-stack";

import DetailsScreen from "./Details";
import EditScreen from "./EditScreen";
import Expenses from "./index";

const SpendingStack = createStackNavigator(
  { Expenses, Details: DetailsScreen, EditScreen },
  { initialRouteName: "Expenses" }
);

export default SpendingStack;
