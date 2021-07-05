/** @format */

import React, { useState } from "react";
import styles from "./styles.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Image,
	Alert,
	Keyboard,
} from "react-native";
import student from '../../data/student.json';
import { firebaseApp } from "../../components/FirebaseConfig.js";
import { Button } from "react-native-elements/dist/buttons/Button";


const SignUp = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    const [error, setError] = useState("")
	// const handleLogin = () => {
	// 	if (username.trim() === "") {
	// 		return Alert.alert("Tên đăng nhập trống!");
	// 	}
	// 	if (password.trim() === "") {
	// 		return Alert.alert("Mật khẩu trống!");
	// 	}
	// 	// kiểm tra thông tin username & password
	// 	const checkLogin = student.filter(i => i.studentcode.includes(username) && i.studentcode.includes(password));
	// 	if (checkLogin.length === 0) {
	// 		//thông báo
	// 		return Alert.alert("Tài khoản hoặc mật khẩu không đúng!");
	// 	} else {
    //         navigation.navigate("BottomTab", { studentcode: username });
    //         return Alert.alert("Đăng ký thành công!");
			
	// 	}

	// };

	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
                <TextInput lable='Tai khoan'
                value={username}
                onChangeText={setUsername} >

                </TextInput>

                <TextInput lable='Tai khoan'
                value={username}
                onChangeText={setUsername} >

                </TextInput>

                {
                    error?
                    <Text >
                        {error}
                    </Text>
                    :null
                }

                <View>
					<TouchableOpacity
						style={styles.buttonSignUp}
						onPress={() =>navigation.navigate("SignUp")}>
						<Text style={styles.textSignUp}>Đăng ký</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default SignUp;
