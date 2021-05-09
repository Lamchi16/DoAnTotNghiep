/** @format */

import React from "react";
import { Picker } from "@react-native-community/picker";
import RNPickerSelect from "react-native-picker-select";
import {
	Alert,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useState } from "react";
import styles from "../StudyAgain/styles";
import Header from "../../components/Header";

function StudyAgain(navigation) {
	const [faculty, setFaculty] = useState("");
	const [job, setJob] = useState("");
	const [lop, setLop] = useState("");
	const [subject, setSubject] = useState("");
	return (
		<View>
			<Header
				label={"trang chủ"}
				style={styles.Header}></Header>
			<View style={styles.container}>
				<View style={styles.line}>
					<Text>Khoa: </Text>
					<RNPickerSelect
						onValueChange={(value) => console.log(value)}
						items={[
							{
								label: "Công nghệ thông tin",
								value: "CNTT",
							},
							{ label: "Cơ khí", value: "CK" },
							{ label: "Kế toán", value: "KT" },
						]}
					/>
				</View>
				<View style={styles.line}>
					<Text>Nghề: </Text>
					<RNPickerSelect
						onValueChange={(value) => console.log(value)}
						items={[
							{
								label: "Lập trình máy tính",
								value: "LTMT",
							},
							{ label: "Thiết kế đỒ hoạ", value: "TKĐH" },
							{
								label: "Kế toán doanh nghiệp",
								value: "KTDN",
							},
						]}
					/>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => Alert.alert("Đăng kí thành công")}>
					<Text>Đăng kí</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
export default StudyAgain;
