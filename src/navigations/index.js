/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
// import Option from "../screens/option";
import Login from "../screens/Login";
import Outcome from "../screens/Outcome";
import Register from "../screens/Register";
const Stack = createStackNavigator();

function NavigationApp() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Login' component={Login} />
				{/* <Stack.Screen name='Option' component={Option}/> */}
				<Stack.Screen
					name='HomeScreen'
					component={HomeScreen}
				/>
				<Stack.Screen name='Outcome' component={Outcome} />
				<Stack.Screen name='Register' component={Register} />
				{/*<Stack.Screen
					name='StudyAgain'
					component={StudyAgain}
				/> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default NavigationApp;
