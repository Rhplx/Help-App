import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/screens/Login";
import LoginPlan from "./app/screens/LoginPlans";
import CompanyRegister from "./app/screens/CompanyRegister";
import PersonalRegister from "./app/screens/PersonalRegister";
import UserRegister from "./app/screens/UserRegister";
import RegisterConfirmation from "./app/screens/RegisterConfirmation";
import LimitedAccount from "./app/screens/LimitedAccount";
import ChatWith from "./app/screens/ChatWith";
import Categories from "./app/screens/categories/Categories";
import SubCategories from "./app/screens/categories/SubCategories";
import ProposeService from "./app/screens/categories/ProposeService";
import CategoriesPeople from "./app/screens/categories/CategoriesPeople";
import People from "./app/screens/people/People";
import Profile from "./app/screens/people/Profile";
import PeopleReview from "./app/screens/people/PeopleReview";
import LeaveReview from "./app/screens/people/LeaveReview";
import Chat from "./app/screens/people/Chat";
import Forgot from "./app/screens/Forgot";
import Privacity from "./app/screens/Privacity";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginPlans" component={LoginPlan} />
        <Stack.Screen name="CompanyRegister" component={CompanyRegister} />
        <Stack.Screen name="PersonalRegister" component={PersonalRegister} />
        <Stack.Screen name="UserRegister" component={UserRegister} />
        <Stack.Screen name="LimitedAccount" component={LimitedAccount} />
        <Stack.Screen name="ChatWith" component={ChatWith} />
        <Stack.Screen
          name="RegisterConfirmation"
          component={RegisterConfirmation}
        />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="SubCategories" component={SubCategories} />
        <Stack.Screen name="ProposeService" component={ProposeService} />
        <Stack.Screen name="CategoriesPeople" component={CategoriesPeople} />
        <Stack.Screen name="People" component={People} />
        <Stack.Screen name="PeopleReview" component={PeopleReview} />
        <Stack.Screen name="LeaveReview" component={LeaveReview} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Privacity" component={Privacity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
