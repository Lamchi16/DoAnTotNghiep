/** @format */

import React from "react";
import { Picker } from "@react-native-community/picker";
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
				<Picker
					style={styles.picker}
					selectedValue={faculty}
					style={{ height: 50, width: 300 }}
					onValueChange={(itemValue, itemIndex) =>
						setFaculty(itemValue)
					}>
					<Picker.Item label='Chọn Khoa' value='' />
					<Picker.Item
						label='Công nghệ thông tin'
						value='CNTT'
					/>
					<Picker.Item label='Cơ Khí' value='CK' />
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='JavaScript' value='js' />
				</Picker>
				<Picker
					style={styles.picker}
					selectedValue={job}
					style={{ height: 50, width: 300 }}
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
						value='TKDH'
					/>
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='JavaScript' value='js' />
				</Picker>
				<Picker
					style={styles.picker}
					selectedValue={lop}
					style={{ height: 50, width: 300 }}
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
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='JavaScript' value='js' />
				</Picker>
				<Picker
					style={styles.picker}
					selectedValue={subject}
					style={{ height: 50, width: 300 }}
					onValueChange={(itemValue, itemIndex) =>
						setSubject(itemValue)
					}>
					<Picker.Item label='Chọn Môn' value='' />
					<Picker.Item label='Lập trình C' value='C' />
					<Picker.Item label='JAVA' value='JV' />
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='JavaScript' value='js' />
				</Picker>
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
