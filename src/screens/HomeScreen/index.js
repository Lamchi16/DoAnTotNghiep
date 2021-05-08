/** @format */

import React from "react";
import {
	Text,
	View,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Image,
	Alert,
	Keyboard,
} from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Header
			label={"trang chủ"}
				style={styles.Header}></Header>
			<View style={styles.content}>
				<Text style={styles.title}>
					Thông tin sinh viên
				</Text>

				<Text style={styles.textInfo}>
					Họ tên: Trần Hoàng Lâm
				</Text>
				<Text style={styles.textInfo}>
					Mã số sinh viên: 180937
				</Text>
				<Text style={styles.textInfo}>
					Ngày sinh: 24/12/2000
				</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate("Outcome")}
					style={styles.button}>
					<Text style={styles.txtBtn}>Xem điểm</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default HomeScreen;
