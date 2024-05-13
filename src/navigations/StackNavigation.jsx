import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../views/SplashScreen";

import QuizScreen from "../views/QuizScreen";
import WelcomeScreen from "../views/WelcomeScreen";
import Score from "../views/Score";







const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="splash" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="quiz" component={QuizScreen} options={{headerShown:false}}/>
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="score" component={Score} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
