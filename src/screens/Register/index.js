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
import student from "../../data/student.json";
function Register({ navigation, route }) {
  const { studentcode, dvhp, subjectSelected, money, semester } = route.params;
  console.log(route.params);
  //console.log(subjectSeleted);
  const [name, setName] = useState("");
  const [classname, setClassname] = useState("");
  const [course, setCourse] = useState("");
  const [faculty, setFaculty] = useState("");
  const [career, setCareer] = useState("");

  const [subject, setSubject] = useState("");
  const [write, setWrite] = useState("");
  useEffect(() => {
    student.forEach((s) => {
      if (s.studentcode == studentcode) {
        setName(s.fullname);
        setClassname(s.class);
        setCourse(s.course);
        setFaculty(s.faculty);
        setCareer(s.career);
        setSubject(subjectSelected);
      }
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header
          label={`PHIẾU ĐĂNG KÝ HỌC LẠI ${semester}`}
          goBack={() => navigation.goBack()}
          style={styles.Header}
        ></Header>
        <View style={styles.title}>
          <View style={styles.content}>
            <View style={styles.fullname}>
              <Text>HỌ TÊN : </Text>
              <Text>{name}</Text>
            </View>

            <View style={styles.fullname}>
              <Text>MSSV: </Text>
              <Text>{studentcode}</Text>
            </View>

            <View style={styles.fullname}>
              <Text>KHÓA: </Text>
              <Text>{course}</Text>
            </View>

            <View style={styles.fullname}>
              <Text>KHOA: </Text>
              <Text>{faculty}</Text>
            </View>

            <View style={styles.fullname}>
              <Text>NGÀNH NGHỀ: </Text>
              <Text>{career}</Text>
            </View>

            <View style={styles.fullname}>
              <Text>LỚP: </Text>
              <Text>{classname}</Text>
            </View>

            <View style={styles.fullname}>
              <Text>MÔN: </Text>
              <Text>{subjectSelected ? subjectSelected : null}</Text>
            </View>
            <View style={styles.fullname}>
              <Text>TỔNG SỐ ĐVHP: </Text>
              <Text>{dvhp}</Text>
            </View>
            <View style={styles.fullname}>
              <Text>SỐ TIỀN: </Text>
              <Text>
                {money
                  ? money.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                  : 0}{" "}
                VNĐ
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignContent: "space-around",
                justifyContent: "space-between",
                marginHorizontal: 15,
              }}
            >
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("StudyAgain")}
                >
                  <Text style={styles.txtButton}>
                    ĐĂNG KÝ MÔN HỌC TIẾP THEO
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#cd1725",
                  color: "#fff",
                  width: 150,
                  height: 40,
                  borderRadius: 7,
                  marginTop: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Schedule")}
                >
                  <Text style={styles.txtButton}>GỬI PHIẾU ĐĂNG KÝ</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <View
                style={{
                  fontWeight: "bold",
                  backgroundColor: "white",
                  width: 150,
                  height: 40,
                  borderRadius: 7,
                  marginTop: 30,
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("HomeScreen")}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: 13,
                      textDecorationLine: "underline",
                    }}
                  >
                    THOÁT
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Schedule")}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: 13,
                      textDecorationLine: "underline",
                    }}
                  >
                    XEM PHIẾU ĐĂNG KÝ
                  </Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </View>
        <View></View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginVertical: 10,
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
    color: "#fff",
    width: 220,
    height: 40,
    borderRadius: 7,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  txtButton: {
    color: "white",
    fontWeight: "600",
    fontSize: 13,
  },
});

export default Register;
