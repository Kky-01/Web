import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import Page52_DiaryScreen from "../screens/Page52_DiaryScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Diary" component={Page52_DiaryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
