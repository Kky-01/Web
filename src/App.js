import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Page46 from "./components/Page46";
import Page47 from "./components/Page47";
//import Page48 from "./components/Page48";
import Page49 from "./components/Page49";
import Page50 from "./components/Page50";
import Page51 from "./components/Page51";
import Diary from "./components/Page52_MyDay";
import LoginScreen from "./components/LoginScreen";
const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="LoginScreen" component={LoginScreen} />
      <Tab.Screen name="Page46" component={Page46} />
      <Tab.Screen name="Page47" component={Page47} />
      <Tab.Screen name="Page49" component={Page49} />
      <Tab.Screen name="Page50" component={Page50} />
      <Tab.Screen name="Page51" component={Page51} />
      <Tab.Screen name="Diary" component={Diary} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
