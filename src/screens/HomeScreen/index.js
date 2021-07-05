/** @format */

import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Alert,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import Header from "../../components/Header";

import student from '../../data/student.json';


function HomeScreen({navigation,route}) {

  const {studentcode} = route.params;
  const [fullname, setFullname] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [faculty, setFaculty] = useState('');
  const [career, setCareer] = useState('');
  const [classname, setClassname] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const fetchInfoStudent = () => {
    try {
      setLoading(true);
      if (studentcode) {
        student.forEach(s => {
          if (s.studentcode == studentcode) {
            setFullname(s.fullname);
            setCareer(s.career);
            setClassname(s.class);
            setCourse(s.course);
            setFaculty(s.faculty);
            setPhone(s.phone);
            setDob(s.dob);
          }
        })
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }

  }
  const logout = () => {
    Alert.alert(
      "Bạn có muốn đăng xuất ?",
      "",
      [
        {
          text: "OK", onPress: () => {
            navigation.navigate("Login");
          }
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      {
        cancelable: true
      }
    );
  }
  useEffect(() => {
    fetchInfoStudent();
  }, [])
  return (
    <View style={styles.container}>
      <Header label="THÔNG TIN SINH VIÊN" style={styles.Header}></Header>
      {
        loading ? (<ActivityIndicator animating size="large" color="red" />)
          : (
            <View style={styles.content}>
              <View
                style={{
                  alignItems: "center",
                  paddingBottom: 10,
                }}
              >
                {/* <Image
                  style={styles.StyleImage}
                  source={require("../../images/image1.png")}
                /> */}
              </View>

              <View style={styles.info}>
                <View style={styles.lineInfo}>
                  <Text style={styles.textContent}>HỌ TÊN:</Text>
                  <Text style={styles.textInfo}>{fullname}</Text>
                </View>

                <View style={styles.lineInfo}>
                  <Text style={styles.textContent}>MÃ SỐ SINH VIÊN:</Text>
                  <Text style={styles.textInfo}>{studentcode}</Text>
                </View>

                <View style={styles.lineInfo}>
                  <Text style={styles.textContent}>NGÀY SINH: </Text>
                  <Text style={styles.textInfo}>{dob}</Text>
                </View>

                <View style={styles.lineInfo}>
                  <Text style={styles.textContent}>KHÓA:</Text>
                  <Text style={styles.textInfo}>{course}</Text>
                </View>
                <View style={styles.lineInfo}>
                  <Text style={styles.textContent}>KHOA: </Text>
                  <Text style={styles.textInfo}>{faculty}</Text>
                </View>
                <View style={styles.lineInfo}>
                  <Text style={styles.textContent}>NGHỀ: </Text>
                  <Text style={styles.textInfo}>{career}</Text>
                </View>
                <View style={styles.lineInfo}>
                  <Text style={styles.textContent}>LỚP:</Text>
                  <Text style={styles.textInfo}>{classname}</Text>
                </View>
                <TouchableOpacity
                  onPress={logout}
                  style={{
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignSelf: 'center',
                    backgroundColor: '#b22222',
                    width: 150,
                    borderRadius: 5,
                    marginTop: 100
                  }}>
                  <Text style={{ textAlign: 'center', color: 'white' }}>ĐĂNG XUẤT</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
      }

    </View>
  );
}

export default HomeScreen;
