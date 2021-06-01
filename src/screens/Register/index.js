/** @format */

import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "../../components/Header";
import student from '../../data/student.json';
function Register({ navigation, route }) {
  const { studentcode, dvhp, subjectSelected } = route.params;
  console.log(route.params);
  //console.log(subjectSeleted);
  const [name, setName] = useState("");
  const [classname, setClassname] = useState("");
  const [course, setCourse] = useState("");
  const [faculty, setFaculty] = useState("");
  const [career, setCareer] = useState("");
  
  const [subject, setSubject] = useState("");
  const [money, setMoney] = useState("");
  const [write, setWrite] = useState("");
  useEffect(() => {
    student.forEach(s => {
      if (s.studentcode == studentcode) {
        setName(s.fullname);
        setClassname(s.class);
        setCourse(s.course);
        setFaculty(s.faculty);
        setCareer(s.career);
  

        setSubject(subjectSelected);
        let _money = 150000 * dvhp;
        setMoney(_money);


      }
    })
  }, [])
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header
          label={"PHIẾU ĐĂNG KÝ HỌC LẠI"}
          goBack={() => navigation.goBack()}
          style={styles.Header}
        ></Header>
        <View style={styles.title}>
          {/* <Text style={styles.titlee}>PHIẾU ĐĂNG KÝ HỌC LẠI </Text> */}
          <View style={styles.content}>
            <View style={styles.fullname}>
              <Text >Họ, tên người nộp tiền: </Text>
              <Text>{name}</Text>
            </View>

            <View style={styles.fullname}>
              <Text >MSSV: </Text>
              <Text>{studentcode}</Text>
            </View>

            <View style={styles.fullname}>
              <Text >Khóa: </Text>
              <Text>{course}</Text>
            </View>

            <View style={styles.fullname}>
              <Text >Khoa: </Text>
              <Text>{faculty}</Text>
            </View>

            <View style={styles.fullname}>
              <Text >Ngành nghề: </Text>
              <Text>{career}</Text>
            </View>

            <View style={styles.fullname}>
              <Text >Lớp: </Text>
              <Text>{classname}</Text>
            </View>

            <View style={styles.fullname}>
              <Text>Môn: </Text>
              <Text>{subjectSelected ? subjectSelected : null}</Text>
            </View>
            <View style={styles.fullname}>
              <Text>Số đơn vị học trình: </Text>
              <Text>{dvhp}</Text>
            </View>
            <View style={styles.fullname}>
              <Text>Số tiền: </Text>
              <Text>{money}</Text>
            </View>
            {/* <View style={styles.fullname}>
              <Text style={styles.fullnamee}>Viết bằng chữ:</Text>
              <TextInput
                style={styles.input}
                onChangeText={Write}
                value={write}
              />
            </View> */}
            {/* <View style={styles.button}>
              <TouchableOpacity style={styles.buttonn} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.txtButton}>Đăng ký</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
        <View>
          {/* <TouchableOpacity
         onPress={() => navigation.navigate("Login")}
          style={styles.back}><Text>Thoát</Text>
        </TouchableOpacity> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 6,
  },
  Header: {
    fontWeight: "bold",
    fontSize: 30,
  },
  back: {
    position: "absolute",
    left: 15,
  },
  titlee: {
    marginTop: 25,
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  content: {
    marginTop: 15,
    marginLeft: 4,
  },
  exit: {
    color: "#0000cc",
    fontWeight: "bold",
  },
  fullname: {
    flexDirection: "row",
    marginVertical:10
  },
  fullnamee: {
    marginTop: 10,
  },
  input: {
    height: 20,
    width: 200,
    margin: 5,
    marginTop: 9,
  },
  button: {
    fontWeight: "bold",
    backgroundColor: "#cd1725",
    fontSize: 20,
    color: "#fff",
    width: 200,
    height: 40,
    borderRadius: 7,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  txtButton: {
    color: "white",
    fontWeight: "600"
  }
});

export default Register;
