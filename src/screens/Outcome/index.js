/** @format */

import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Point from "../../data/Point";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Row, Table } from "react-native-table-component";
//import Item from "../Outcome/Item"

function Outcome() {
  const navigation = useNavigation();
  const title = ["Môn học", "Đơn vị học trình", "Điểm"];
  return (
    <View style={styles.container}>
      <Header
        label={"Kết quả học tập kỳ 1"}
        goBack={() => navigation.goBack()}
        style={styles.Header}
      ></Header>
      <FlatList
        data={Point}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemFail}>
              {/* <View style={{ flex: 1,padding: 16, paddingTop: 30, backgroundColor: '#fff'}}>
              <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row style={styles.subject} textStyle={styles.text}></Row> 
                <Row style={styles.subject} textStyle={styles.text}></Row> 
              </Table>
              </View> */}

              <View
                style={{
                  // flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ fontSize: "30" }}>
                  <Text style={styles.semester}>{item.semester}</Text>
                </View>

                <View>
                  <Text style={styles.theory}>{item.theory}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.subject}>{item.subject2}</Text>
                  <Text style={styles.point}>{item.point2}</Text>
                </View>

                <View>
                  <Text style={styles.theory}>{item.practice}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.subject}>{item.subject1}</Text>
                  <Text style={styles.point}>{item.point1}</Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <View
        style={{
          flexDirection: "row-reverse",
          marginBottom: 10,
          marginHorizontal: 8,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Semester2")}
          style={styles.back}
        >
          <Ionicons
            name="arrow-forward-circle-outline"
            size={20}
            color="black"
            style={styles.icon}
          ></Ionicons>
        </TouchableOpacity>
        <Text>Học kỳ 2 </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemFail: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 6,
    borderRadius: 10,
    borderColor: "#000",
    marginTop: 20,
  },
  itemPass: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 6,
    borderRadius: 10,
    borderColor: "#000",
  },

  point: {
    fontSize: 15,
  },
  subject: { fontSize: 15 },
  semester: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  theory: {
    fontSize: 17,
    fontWeight: "900",
    textDecorationLine: "underline",
    marginBottom: 5,
  },
  text: { margin: 6 },
});
export default Outcome;
