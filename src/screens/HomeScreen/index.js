/** @format */

import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Alert,
  Keyboard,
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

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header label="THÔNG TIN SINH VIÊN" style={styles.Header}></Header>

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
            <Text style={styles.textInfo}>{Info.fullname}</Text>
          </View>

          <View style={styles.lineInfo}>
            <Text style={styles.textInfo}>Mã số sinh viên:</Text>
            <Text style={styles.textInfo}>{Info.studentcode}</Text>
          </View>

          <View style={styles.lineInfo}>
            <Text style={styles.textInfo}>Ngày sinh: </Text>
            <Text style={styles.textInfo}>{Info.dob}</Text>
          </View>

          <View style={styles.lineInfo}>
            <Text style={styles.textInfo}>Khóa:</Text>
            <Text style={styles.textInfo}>{Info.course}</Text>
          </View>
          <View style={styles.lineInfo}>
            <Text style={styles.textInfo}>Khoa: </Text>
            <Text style={styles.textInfo}>{Info.faculty}</Text>
          </View>
          <View style={styles.lineInfo}>
            <Text style={styles.textInfo}>Nghề: </Text>
            <Text style={styles.textInfo}>{Info.career}</Text>
          </View>
          <View style={styles.lineInfo}>
            <Text style={styles.textInfo}>Lớp:</Text>
            <Text style={styles.textInfo}>{Info.class}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
