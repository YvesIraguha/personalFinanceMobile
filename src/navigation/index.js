import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import {
  Ionicons,
  Entypo,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { Dimensions } from "react-native";
import LoginScreen from "../screens/login";
import Income from "../screens/IncomeStreams";
import Debt from "../screens/Debts";
import Investment from "../screens/Investments/navigation";
import Credit from "../screens/Credits";
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
    Income: {
      screen: Income,
      navigationOptions: {
        drawerIcon: () => <FontAwesome name="money" size={32} color="#617BE3" />
      }
    },
    Debt: {
      screen: Debt,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialCommunityIcons
            name="wallet-giftcard"
            size={32}
            color="#617BE3"
          />
        )
      }
    },
    Investment: {
      screen: Investment,
      navigationOptions: {
        drawerIcon: () => <Ionicons name="md-home" size={32} color="#617BE3" />
      }
    },
    Credit: {
      screen: Credit,
      navigationOptions: {
        drawerIcon: () => <Entypo name="credit" size={32} color="#617BE3" />
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
