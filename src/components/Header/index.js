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
							size={35}
							color= "#b22222"
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
						<Ionicons
							name='ios-chevron-forward'
							size={40}
							color="#b22222"
							style={styles.icon}></Ionicons>
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
