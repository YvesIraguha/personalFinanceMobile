import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../screens/login";
import HomeScreen from "../screens/home";
const switchNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(switchNavigator);
