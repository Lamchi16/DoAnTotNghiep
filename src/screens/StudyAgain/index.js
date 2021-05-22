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
  const [faculty, setFaculty] = useState("");
  const [job, setJob] = useState("");
  const [lop, setLop] = useState("");
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("");
  //   const navigation = useNavigation();
  const [theory, setTheory] = useState(false);
  const [practice, setPractice] = useState(false);

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
          <Text style={styles.textLabel}>Chọn môn: </Text>

          <Picker

            selectedValue={subject}
            style={{ height: 30, width: 280 }}
            onValueChange={(itemValue, itemIndex) => setSubject(itemValue)}
          >
            <Picker.Item label=" " value="" />
            <Picker.Item label="Lập trình C" value="C" />
            <Picker.Item label="JAVA" value="JV" />

            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        {/* //CheckBox */}
        <View>
          <View style={{ flexDirection: "row",
         }}>
          <Text style={styles.textLabel}>Chọn học phần: </Text>
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
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegistry}>
          <Text style={styles.txtLogin}>Đăng kí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default StudyAgain;
