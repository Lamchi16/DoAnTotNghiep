/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import Outcome from "../screens/Outcome";
import StudyAgain from "../screens/StudyAgain";
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
				{/* <Stack.Screen name='Outcome' component={Outcome} /> */}
				{/*<Stack.Screen
					name='StudyAgain'
					component={StudyAgain}
				/> */}
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
			/>
			<Tab.Screen
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
			/>
		</Tab.Navigator>
	);
}

export default NavigationApp;
