import { createStackNavigator } from "react-navigation-stack";

import DetailsScreen from "./Details";
import EditScreen from "./EditScreen";
import Expenses from "./index";
import NewExpense from "./NewExpense";

const SpendingStack = createStackNavigator(
  { Expenses, Details: DetailsScreen, EditScreen, NewExpense },
  { initialRouteName: "Expenses" }
);

export default SpendingStack;
