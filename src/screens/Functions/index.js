/** @format */

import React from "react";
import { Picker } from "@react-native-community/picker";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import {
	Alert,
	Text,
	TextInput,
	TextInputBase,
	TouchableOpacity,
	View,
} from "react-native";
import { useState } from "react";
import styles from "../Functions/styles";
import Header from "../../components/Header";
import StudyAgain from "../StudyAgain/index";

function Function({ navigation }) {
	const [faculty, setFaculty] = useState("");
	const [job, setJob] = useState("");
	const [lop, setLop] = useState("");
	/* 	const [subject, setSubject] = useState("");
	const [type, setType] = useState(""); */
	const handleRegistry = () => {
		if (
			faculty.trim() === "" ||
			job.trim() === "" ||
			lop.trim() === ""
		) {
			return Alert.alert("Vui lòng chọn đủ thông tin !");
		}

		navigation.navigate("StudyAgain");
	};
	const handleResult = () => {
		if (
			faculty.trim() === "" ||
			job.trim() === "" ||
			lop.trim() === ""
		) {
			return Alert.alert("Vui lòng chọn đủ thông tin !");
		}
		navigation.navigate("Outcome");
	};

	return (
		<View style={styles.warper}>
			<Header
				label={"Chức năng"}
				style={styles.Header}></Header>

			<View style={styles.container}>
				<View style={styles.line}>
					<Text style={styles.textLabel}>Khoa: </Text>

					<Picker
						style={styles.picker}
						selectedValue={faculty}
						style={{ height: 30, width: 300 }}
						onValueChange={(itemValue, itemIndex) =>
							setFaculty(itemValue)
						}>
						<Picker.Item label='Chọn Khoa' value='' />
						<Picker.Item
							label='Công nghệ thông tin'
							value='CNTT'
						/>
						<Picker.Item label='Cơ Khí' value='CK' />
					</Picker>
				</View>
				<View style={styles.line}>
					<Text style={styles.textLabel}>Nghề: </Text>

					<Picker
						style={styles.picker}
						selectedValue={job}
						style={{ height: 30, width: 300 }}
						onValueChange={(itemValue, itemIndex) =>
							setJob(itemValue)
						}>
						<Picker.Item label='Chọn Nghề' value='' />
						<Picker.Item
							label='Lập trình máy tính'
							value='LTMT'
						/>
						<Picker.Item
							label='Thiết kế đồ hoạ'
							value='TKĐH'
						/>
					</Picker>
				</View>
				<View style={styles.line}>
					<Text style={styles.textLabel}>Lớp: </Text>

					<Picker
						style={styles.picker}
						selectedValue={lop}
						style={{ height: 30, width: 300 }}
						onValueChange={(itemValue, itemIndex) =>
							setLop(itemValue)
						}>
						<Picker.Item label='Chọn Lớp' value='' />
						<Picker.Item
							label='Lập trình máy tính 1'
							value='LTMT1'
						/>
						<Picker.Item
							label='Thiết kế đồ hoạ 1'
							value='TKDH1'
						/>
					</Picker>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: "row-reverse",
						/* marginHorizontal: 10,
						justifyContent: "space-evenly", */
					}}>
					<TouchableOpacity
						style={styles.button}
						onPress={handleRegistry}>
						<Text style={styles.txtLogin}>Đăng kí</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={handleResult}>
						<Text style={styles.txtLogin}>Xem điểm</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
export default Function;
