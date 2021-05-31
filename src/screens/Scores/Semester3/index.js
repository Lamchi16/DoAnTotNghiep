import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header";
import Point from "../../../data/Point";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

function Semester2() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        label={"KẾT QUẢ HỌC TẬP KỲ 3"}
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
              data={Point.Head}
              style={styles.HeadStyle}
              textStyle={styles.HeaderText}
            />
            <Rows data={Point.Data} textStyle={styles.TableText} />
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
              data={Point.Head}
              style={styles.HeadStyle}
              textStyle={styles.HeaderText}
            />
            <Rows data={Point.Data} textStyle={styles.TableText} />
          </Table>

          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 20,
              paddingTop: 0,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("StudyAgain")}
              style={styles.button}
            >
              <Text style={styles.txtBtn}>Đăng ký học lại</Text>
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
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
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
export default Semester2;
