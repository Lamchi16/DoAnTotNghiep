/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import Outcome from "../screens/Outcome";
import Function from "../screens/Functions";
import StudyAgain from "../screens/StudyAgain";
import Register from "../screens/Register";
import Semester2 from "../screens/Scores/Semester2";
import Semester3 from "../screens/Scores/Semester3";
import Semester4 from "../screens/Scores/Semester4";
import Semester5 from "../screens/Scores/Semester5";
import Semester6 from "../screens/Scores/Semester6";
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
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen
					name='BottomTab'
					component={BottomTab}
				/>
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
					name='Semester2'
					component={Semester2}
				/>
				<Stack.Screen
					name='Semester3'
					component={Semester3}
				/>
				<Stack.Screen
					name='Semester4'
					component={Semester4}
				/>
				<Stack.Screen
					name='Semester5'
					component={Semester5}
				/>
				<Stack.Screen
					name='Semester6'
					component={Semester6}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
const Tab = createBottomTabNavigator();

function BottomTab() {
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
			/>

			<Tab.Screen
				options={{
					tabBarLabel: "Chức năng",
					tabBarIcon: ({ color, size }) => (
						<Entypo
							name='text-document'
							color={color}
							size={size}
						/>
					),
				}}
				name='Functions'
				component={Function}
			/>
			{/* <Tab.Screen
				options={{
					tabBarLabel: "Đăng kí học lại",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome
							name='pencil-square-o'
							color={color}
							size={size}
						/>
					),
				}}
				name='StudyAgain'
				component={StudyAgain}
			/> */}
		</Tab.Navigator>
	);
}

export default NavigationApp;
