import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import IntroPage from './pages/IntroPage'

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="intro">
      <Stack.Screen name="intro" component={IntroPage} />
    </Stack.Navigator>
  </NavigationContainer>
);
