import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/Screen/HomeScreen";
import LoginScreen from "./src/Screen/LoginScreen";
import RegisterScreen from "./src/Screen/RegisterScreen";
import AccountContextProvider from "./src/store/account-context";
import ActivityScreen2 from "./src/Screen/ActivityScreen2";

const Stack = createNativeStackNavigator();

function App () {
  return (
    <AccountContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Activity" component={ActivityScreen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </AccountContextProvider>
  );
}

const styles = StyleSheet.create({
  
});

export default App;