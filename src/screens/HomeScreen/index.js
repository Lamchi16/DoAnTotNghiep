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

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header
        label="THÔNG TIN SINH VIÊN"
        goBack={() => navigation.goBack()}
        style={styles.Header}
      ></Header>

      <View style={styles.content}>
        {/* <FlatList
          style={styles.list}
          data={Point}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.itemFail}>
                  <View
                    style={{
                      // flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ fontSize: "30", marginBottom: 15}}>
                      <Text style={styles.fullname}>
                        Họ và tên: {item.fullname}
                      </Text>
                      <Text style={styles.studentcode}>
                        Mã số sinh viên: {item.studentcode}
                      </Text>
                      <Text style={styles.course}>Khóa: {item.course}</Text>
                      <Text style={styles.faculty}> Khoa: {item.faculty}</Text>
                      <Text style={styles.faculty}> NGhề: {item.career}</Text>
                      <Text style={styles.faculty}> Lớp: {item.class}</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View> */}
      
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.StyleImage}
            source={require("../../images/image1.png")}
          />
        </View>
        <View style={{ marginLeft: 150 }}>
          <Text style={styles.textInfo}>Họ tên: ĐTPA</Text>
          <Text style={styles.textInfo}>Mã số sinh viên: 123123</Text>
          <Text style={styles.textInfo}>Ngày sinh: 21/10/2000</Text>
          <Text style={styles.textInfo}>Khóa: 11</Text>
          <Text style={styles.textInfo}>Khoa: Công nghệ thông tin</Text>
          <Text style={styles.textInfo}>Nghề: Lập trình máy tính</Text>
          <Text style={styles.textInfo}>Lớp: Lập trình máy tính 1</Text>
        </View>

        <View>
    
        </View>
         <View
					style={{
						flex: 1,
						justifyContent: "space-between",
					}}>
					<TouchableOpacity
						onPress={() => navigation.navigate("Outcome")}
						style={styles.button}>
						<Text style={styles.txtBtn}>Xem điểm</Text>
					</TouchableOpacity>
				</View> 
      </View>
    </View>
  );
}

export default HomeScreen;
