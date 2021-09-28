import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register";
import LoginPlan from "./app/screens/LoginPlans";
import CompanyRegister from "./app/screens/CompanyRegister";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CompanyRegister"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginPlans" component={LoginPlan} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="CompanyRegister" component={CompanyRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
