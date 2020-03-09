import { createStackNavigator } from "react-navigation-stack";

import DetailsScreen from "./Details";
import EditScreen from "./EditScreen";
import Investments from "./index";
import NewInvestment from "./NewInvestment";

const InvestmentStack = createStackNavigator(
  { Investments, Details: DetailsScreen, EditScreen, NewInvestment },
  { initialRouteName: "NewInvestment" }
);

export default InvestmentStack;
