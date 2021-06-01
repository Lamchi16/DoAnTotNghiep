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
import Point from "../../data/Point";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import Info from "../../data/Info";

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
                <Image
                  style={styles.StyleImage}
                  source={require("../../images/image1.png")}
                />
              </View>

              <View style={styles.info}>
                <View style={styles.lineInfo}>
                  <Text style={styles.textInfo}>Họ tên:</Text>
                  <Text style={styles.textInfo}>{fullname}</Text>
                </View>

                <View style={styles.lineInfo}>
                  <Text style={styles.textInfo}>Mã số sinh viên:</Text>
                  <Text style={styles.textInfo}>{studentcode}</Text>
                </View>

                <View style={styles.lineInfo}>
                  <Text style={styles.textInfo}>Ngày sinh: </Text>
                  <Text style={styles.textInfo}>{dob}</Text>
                </View>

                <View style={styles.lineInfo}>
                  <Text style={styles.textInfo}>Khóa:</Text>
                  <Text style={styles.textInfo}>{course}</Text>
                </View>
                <View style={styles.lineInfo}>
                  <Text style={styles.textInfo}>Khoa: </Text>
                  <Text style={styles.textInfo}>{faculty}</Text>
                </View>
                <View style={styles.lineInfo}>
                  <Text style={styles.textInfo}>Nghề: </Text>
                  <Text style={styles.textInfo}>{career}</Text>
                </View>
                <View style={styles.lineInfo}>
                  <Text style={styles.textInfo}>Lớp:</Text>
                  <Text style={styles.textInfo}>{classname}</Text>
                </View>
                <TouchableOpacity
                  onPress={logout}
                  style={{
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignSelf: 'center',
                    backgroundColor: 'red',
                    width: 120,
                    borderRadius: 5
                  }}>
                  <Text style={{ textAlign: 'center', color: 'white' }}>Đăng xuất</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
      }

    </View>
  );
}

export default HomeScreen;
