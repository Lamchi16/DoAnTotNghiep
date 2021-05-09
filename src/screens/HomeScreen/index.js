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
  TextInput,
} from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function HomeScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.container}>
      <Header style={styles.Header}></Header>
      <View style={styles.content}>
        <View style={styles.select}>
          <Text style={styles.title}>Khoa: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
			placeholder={"Khoa"}
            value={text}
          />
        </View>
		<View style={styles.select}>
          <Text style={styles.title}>Ngành: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
			placeholder={"Chuyên ngành"}
            value={text}
          />
        </View>
		<View style={styles.select}>
          <Text style={styles.title}>Lớp: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
			placeholder={"Lớp"}
            value={text}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Outcome")}
          style={styles.button}
        >
          <Text style={styles.txtBtn}>Xem điểm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.button}
        >
          <Text style={styles.txtBtn}>Đăng ký học lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;
