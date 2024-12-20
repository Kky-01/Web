import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Page46 from "./components/Page46";
import Page47 from "./components/Page47";

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: () => null,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          lineHeight: 15,
        },
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen name="p.46" component={Page46} />
      <Tab.Screen name="p.47" component={Page47} />
      <Tab.Screen name="p.48" component={Page46} />
      <Tab.Screen name="p.49" component={Page46} />
      <Tab.Screen name="p.50" component={Page46} />
      <Tab.Screen name="p.51" component={Page46} />
      <Tab.Screen name="p.52" component={Page46} />
      <Tab.Screen name="Diary" component={Page46} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
