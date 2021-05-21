/** @format */

import React, { useState } from "react";
import styles from "./styles.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import User from "../../data/Account";
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

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "") {
      return Alert.alert("Tên đăng nhập trống!");
    }
    if (password.trim() === "") {
      return Alert.alert("Mật khẩu trống!");
    }
    if (username !== User.username || password !== User.password) {
      return Alert.alert("Sai tên đăng nhập hoặc mật khẩu!\nThử lại");
    }
    navigation.navigate("BottomTab");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          source={require("../../images/logo1.png")}
          style={styles.logo}
        ></Image>
        <View>
          <View>
            <Text style={styles.content}>HỆ THỐNG ĐĂNG NHẬP</Text>
          </View>
          <View>
            <FontAwesome5
              name="user-alt"
              size={20}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.textinput}
              placeholder="Tài khoản"
              onChangeText={(text) => setUsername(text)}
            ></TextInput>
          </View>
          <View>
            <FontAwesome5
              name="lock"
              size={20}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.textinput}
              secureTextEntry={true}
              placeholder="Mật khẩu"
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.txtLogin}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.view}>
					<Text style={styles.TextSignUp}>
						Haven't account ?
					</Text>
					<Text
						style={styles.TextSignUp}
						onPress={() => navigation.navigate("Register")}>
						Sign up
					</Text>
				</View> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;
