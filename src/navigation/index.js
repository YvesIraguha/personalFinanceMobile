import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import LoginScreen from "../screens/login";
import HomeScreen from "../screens/home";
import DetailsScreen from "../screens/Details";
import EditScreen from "../screens/EditScreen";

import DrawerScreen from "../screens/HomeDrawerScreen";

const AppStack = createStackNavigator(
  { Home: HomeScreen, Details: DetailsScreen, EditScreen },
  { initialRouteName: "Home" }
);

const AuthStack = createStackNavigator(
  { Login: LoginScreen },
  { initialRouteName: "Login" }
);

const Drawer = createDrawerNavigator({ Home: AppStack, About: DrawerScreen });

const switchNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: Drawer
  },
  {
    initialRouteName: "Auth"
  }
);

export default createAppContainer(switchNavigator);
