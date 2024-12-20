import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Page46 from "./components/Page46";
import Page47 from "./components/Page47";
import Page48 from "./components/Page48";
import Page49 from "./components/Page49";
import Page50 from "./components/Page50";
import Page51 from "./components/Page51";
import Page52 from "./components/Page52";
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
      <Tab.Screen name="p.48" component={Page48} />
      <Tab.Screen name="p.49" component={Page49} />
      <Tab.Screen name="p.50" component={Page50} />
      <Tab.Screen name="p.51" component={Page51} />
      <Tab.Screen name="p.52" component={Page52} />
      <Tab.Screen name="Diary" component={Page46} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
