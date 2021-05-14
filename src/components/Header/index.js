/** @format */

import React from "react";
import {
	SafeAreaView,
	View,
	StatusBar,
	Text,
	TouchableOpacity,
	Image,
} from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

function Header({
	label,
	goBack,
	rightButton,
	rightComponent,
}) {
	return (
		<SafeAreaView>
			<StatusBar
				backgroundColor='#fff'
				barStyle='dark-content'></StatusBar>
			<View style={styles.container}>
				{goBack && (
					<TouchableOpacity
						onPress={goBack}
						style={styles.back}>
						<Ionicons
							name='ios-chevron-back'
							size={40}
							color='black'
							style={styles.icon}></Ionicons>
					</TouchableOpacity>
				)}
				<Text style={styles.header} numberOfLines={1}>
					{label}
				</Text>
				{rightButton && (
					<TouchableOpacity
						onPress={rightButton}
						style={styles.right}>
						<Text>{rightComponent}</Text>
					</TouchableOpacity>
				)}
			</View>
		</SafeAreaView>
	);
}

Header.defaultProps = {
	label: "Header",
	goBack: null,
	rightButton: null,
};

export default Header;
