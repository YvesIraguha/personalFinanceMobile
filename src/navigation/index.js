import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import LoginScreen from "../screens/login";
import Investment from "../screens/Investments/navigation";
import DrawerScreen from "../screens/DrawerScreen";
import Spending from "../screens/Expenses/navigation";

const AuthStack = createStackNavigator(
  { Login: LoginScreen },
  { initialRouteName: "Login" }
);

const Drawer = createDrawerNavigator(
  {
    Spending: {
      screen: Spending,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name="md-wallet" size={32} color="#617BE3" />
        )
      }
    },

    Investment: {
      screen: Investment,
      navigationOptions: {
        drawerIcon: () => <Ionicons name="md-home" size={32} color="#617BE3" />
      }
    }
  },
  {
    contentComponent: props => <DrawerScreen {...props} />,
    drawerWidth: Dimensions.get("window").width * 0.85,
    initialRouteName: "Investment"
  }
);

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
