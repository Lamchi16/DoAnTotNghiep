/** @format */

import React from "react";
import { Picker } from "@react-native-community/picker";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import {
	Alert,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	CheckBox,
} from "react-native";
import { useState } from "react";
import styles from "../StudyAgain/styles";
import Header from "../../components/Header";
// import { useNavigation } from "@react-navigation/native";

function StudyAgain({ navigation }) {
	// const [faculty, setFaculty] = useState("");
	// const [job, setJob] = useState("");
	// const [lop, setLop] = useState("");
	const [subject, setSubject] = useState("");
	const [type, setType] = useState("");
	const [theory, setTheory] = useState(true);
	const [practice, setPractice] = useState(false);
	const [number, onChangeNumber] = React.useState(null);

	const handleRegistry = () => {
		if (subject.trim() === "" || theory.trim() === "" || practice.trim() === "" ||  number.trim() === "" ) {
			return Alert.alert("Vui lòng chọn đủ thông tin !");
		}
		{
			navigation.navigate("Register");
			return Alert.alert("Đăng kí thành công !");
		}
	};
	return (
		<View style={styles.warper}>
			<Header
				label={"ĐĂNG KÝ HỌC LẠI"}
				goBack={() => navigation.goBack()}
				style={styles.Header}
			></Header>

			<View style={styles.container}>
				<View style={styles.line}>
					<Text style={styles.textLabel}>Chọn môn: </Text>

					<Picker
						selectedValue={subject}
						style={{ height: 40, width: 300 }}
						onValueChange={(itemValue, itemIndex) => setSubject(itemValue)}
					>
						<Picker.Item label="" value="" />
						<Picker.Item label="Lập trình C" value="C" />
						<Picker.Item label="JAVA" value="JV" />

						<Picker.Item label="JavaScript" value="js" />
					</Picker>
				</View>

				{/* //CheckBox */}

				<View style={styles.line}>
					<Text style={styles.textLabel}>Chọn học phần:</Text>
					<View style={styles.checkboxContainer}>
						<Text style={styles.label}>Lý thuyết</Text>
						<CheckBox
							value={theory}
							onValueChange={setTheory}
							style={styles.checkbox}
						/>
					</View>

					<View style={styles.checkboxContainer}>
						<Text style={styles.label}>Thực hành</Text>
						<CheckBox
							value={practice}
							onValueChange={setPractice}
							style={styles.checkbox}
						/>
					</View>
				</View>

				<View style={styles.line}>
					<Text style={styles.textLabel}>Đơn vị học phần:</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChangeNumber}
						value={number}
						placeholder="Nhập ĐVHP"
						keyboardType="numeric"
					/>
				</View>

				<View style={styles.line}>
					<Text style={styles.textLabel}>Tiền lý thuyết: </Text>
				</View>

				<View style={styles.line}>
					<Text style={styles.textLabel}>Tiền thực hành: </Text>
				</View>

				<View style={styles.line}>
					<Text style={styles.textLabel}>Tổng tiền: </Text>
				</View>

				

				{/* Button đăng ký học lại */}
				<View style={{alignItems: "center", marginTop: 30}}>
					<TouchableOpacity style={styles.button} onPress={handleRegistry}>
						<Text style={styles.txtLogin}>Đăng kí</Text>
					</TouchableOpacity>
				</View>

			</View>
		</View>
	);
}
export default StudyAgain;
