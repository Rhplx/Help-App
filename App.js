import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register";
import LoginPlan from "./app/screens/LoginPlans";
import CompanyRegister from "./app/screens/CompanyRegister";
import PersonalRegister from "./app/screens/PersonalRegister";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PersonalRegister"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginPlans" component={LoginPlan} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="CompanyRegister" component={CompanyRegister} />
        <Stack.Screen name="PersonalRegister" component={PersonalRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
