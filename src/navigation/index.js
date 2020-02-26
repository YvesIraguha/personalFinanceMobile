import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/login";
import HomeScreen from "../screens/home";
import DetailsScreen from "../screens/Details";
import EditScreen from "../screens/EditScreen";

const AppStack = createStackNavigator(
  { Home: HomeScreen, Details: DetailsScreen, EditScreen },
  { initialRouteName: "Home" }
);

const AuthStack = createStackNavigator(
  { Login: LoginScreen },
  { initialRouteName: "Login" }
);

const switchNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: "Auth"
  }
);

export default createAppContainer(switchNavigator);
