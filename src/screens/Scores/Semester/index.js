import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";

import Header from "../../../components/Header";
import { Table, Row, Rows, Cell, Col } from "react-native-table-component";

function Semester({ navigation, route }) {
  //lấy điểm
  const { point, studentcode } = route.params;
  const head = ["Mã môn", "Môn học", "ĐV học phần", "Điểm", "Kết quả"];
  return (
    <View style={styles.container}>
      <Header
        label={`KẾT QUẢ HỌC TẬP KỲ ${point.type}`}
        goBack={() => navigation.goBack()}
        // rightButton={() => navigation.navigate("Semester2")}
        style={styles.Header}
      ></Header>
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              padding: 10,
              flex: 0,
            }}
          >
            Lý thuyết
          </Text>
          <Table
            borderStyle={{
              borderWidth: 1,
              borderColor: "#000",
            }}
          >
            <Row
              data={head}
              style={styles.HeadStyle}
              textStyle={styles.HeaderText}
            />
            <Rows data={point.lythuyet} textStyle={styles.TableText} />
          </Table>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              padding: 10,
              flex: 0,
            }}
          >
            Thực hành
          </Text>
          <Table
            borderStyle={{
              borderWidth: 1,
              borderColor: "#000",
            }}
          >
            <Row
              data={head}
              style={styles.HeadStyle}
              textStyle={styles.HeaderText}
            />
            <Rows data={point.thuchanh} textStyle={styles.TableText} />
          </Table>
          <Text style={{ marginTop: 10, color: "red" }}>
            {" "}
            NOTE: Môn học lại của kỳ lẻ sẽ được đăng ký và học lại ở kỳ chẵn và
            ngược lại{" "}
          </Text>

          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 20,
              paddingTop: 0,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("StudyAgain", {
                  data: point,
                  studentcode: studentcode,
                })
              }
              style={styles.button}
            >
              <Text style={styles.txtBtn}>ĐĂNG KÝ HỌC LẠI</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    marginBottom: 80,
    justifyContent: "center",
    paddingHorizontal: 8,
  },

  button: {
    fontWeight: "bold",
    backgroundColor: "#cd1725",
    color: "#fff",
    width: 150,
    height: 40,
    borderRadius: 7,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  txtBtn: {
    fontSize: 15,
    color: "#fff",
  },
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor: "#ffe4e1",
  },
  TableText: {
    margin: 10,
  },
  HeaderText: {
    margin: 10,
    fontWeight: "bold",
  },
});
export default Semester;
