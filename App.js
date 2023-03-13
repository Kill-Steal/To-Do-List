import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/Screen/HomeScreen";
import LoginScreen from "./src/Screen/LoginScreen";
import RegisterScreen from "./src/Screen/RegisterScreen";
import AccountContextProvider from "./src/store/account-context";
import ActivityScreen from "./src/Screen/ActivityScreen";
import ProfileScreen from "./src/Screen/ProfileScreen";
import EditScreen from "./src/Screen/EditScreen";
import Credit from "./src/Screen/Credit";

const Stack = createNativeStackNavigator();

function App () {
  return (
    <AccountContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Credit" component={Credit} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Activity" component={ActivityScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>  
      </NavigationContainer>
    </AccountContextProvider>
  );
}

export default App;