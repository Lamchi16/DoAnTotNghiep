/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import Outcome from "../screens/Outcome";
const Stack = createStackNavigator();

function NavigationApp() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen
					name='HomeScreen'
					component={HomeScreen}
				/>
				<Stack.Screen name='Outcome' component={Outcome} />
				{/*<Stack.Screen
					name='StudyAgain'
					component={StudyAgain}
				/> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default NavigationApp;
