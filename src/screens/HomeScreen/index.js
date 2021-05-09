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
				<Image
					style={styles.StyleImage}
					source={require("../../images/image1.png")}
				/>
				<Text style={styles.title}>
					Thông tin sinh viên
				</Text>

				<Text style={styles.textInfo}>Họ tên: ĐTPA</Text>
				<Text style={styles.textInfo}>
					Mã số sinh viên: 123123
				</Text>
				<Text style={styles.textInfo}>
					Ngày sinh: 21/10/2000
				</Text>
				{/* <View
					style={{
						flex: 1,
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<TouchableOpacity
						onPress={() => navigation.navigate("Outcome")}
						style={styles.button}>
						<Text style={styles.txtBtn}>Xem điểm</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Outcome")}
						style={styles.button}>
						<Text style={styles.txtBtn}>
							Đăng kí học lại
						</Text>
					</TouchableOpacity>
				</View> */}
			</View>
		</View>
	);
}

export default HomeScreen;
