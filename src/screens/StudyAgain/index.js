/** @format */

import React from "react";
import { Picker } from "@react-native-community/picker";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import styles from "../StudyAgain/styles";
import Header from "../../components/Header";
// import { useNavigation } from "@react-navigation/native";

function StudyAgain({ navigation }) {
  const [faculty, setFaculty] = useState("");
  const [job, setJob] = useState("");
  const [lop, setLop] = useState("");
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("");
//   const navigation = useNavigation();
  const handleRegistry = () => {
    if (subject === "" || type.trim() === "") {
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
        label={"Đăng kí học lại"}
        goBack={() => navigation.goBack()}
        style={styles.Header}
      ></Header>

      <View style={styles.container}>
        <View style={styles.line}>
          <Text style={styles.textLabel}>Môn: </Text>

          <Picker
            style={styles.picker}
            selectedValue={subject}
            style={{ height: 30, width: 300 }}
            onValueChange={(itemValue, itemIndex) => setSubject(itemValue)}
          >
            <Picker.Item label="Chọn Môn" value="" />
            <Picker.Item label="Lập trình C" value="C" />
            <Picker.Item label="JAVA" value="JV" />

            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View style={styles.line}>
          <Text style={styles.textLabel}>Loại : </Text>

          <Picker
            style={styles.picker}
            selectedValue={type}
            style={{ height: 30, width: 300 }}
            mode={"dropdown"}
            onValueChange={(itemValue, itemIndex) => setType(itemValue)}
          >
            <Picker.Item label="Chọn loại học phần" value="" />
            <Picker.Item label="Lý thuyết" value="LT" />
            <Picker.Item label="Thực hành" value="TH" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegistry}>
          <Text style={styles.txtLogin}>Đăng kí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default StudyAgain;
