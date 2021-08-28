/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
//import SignUp from "../screens/SignUp";
import Outcome from "../screens/Outcome";
// import Function from "../screens/Functions";
import StudyAgain from "../screens/StudyAgain";
import Register from "../screens/Register";
import Semester from "../screens/Scores/Semester";
import Schedule from "../screens/Schedule";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	MaterialCommunityIcons,
	Entypo,
	FontAwesome,
} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

function NavigationApp() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="Login"
				>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen
					name='BottomTab'
					component={BottomTab}
				/>
				{/* <Stack.Screen name='SignUp' component={SignUp} /> */}
	
				<Stack.Screen name='Outcome' component={Outcome} />
				<Stack.Screen
					name='StudyAgain'
					component={StudyAgain}
				/>
				<Stack.Screen
					name='Register'
					component={Register}
				/>
				<Stack.Screen
					name='Semester'
					component={Semester}
				/>
				<Stack.Screen
					name='Schedule'
					component={Schedule}
				/>
				
			</Stack.Navigator>
		</NavigationContainer>
	);
}
const Tab = createBottomTabNavigator();

function BottomTab({route,navigation}) {
	const {studentcode} = route.params;
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				options={{
					tabBarLabel: "Thông tin sinh viên",
					tabBarIcon: ({ color, size }) => (
						<AntDesign
							name='switcher'
							color={color}
							size={size}
						/>
					),
				}}
				name='HomeScreen'
				component={HomeScreen}
				initialParams={{studentcode:studentcode}}
			/>

			<Tab.Screen
				options={{
					tabBarLabel: "Kết quả học tập",
					tabBarIcon: ({ color, size }) => (
						<Entypo
							name='text-document'
							color={color}
							size={size}
						/>
					),
				}}
				name='Outcome'
				component={Outcome}
				initialParams={{studentcode:studentcode}}
			/>
		
		</Tab.Navigator>
	);
}

export default NavigationApp;
