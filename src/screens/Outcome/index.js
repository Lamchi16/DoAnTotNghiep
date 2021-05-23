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

import styles from "../Outcome/styles";
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
                  <Text style={styles.point}>{item.subject2}</Text>
                  <Text style={styles.point}>{item.credits2}</Text>
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
                  
                  <Text style={styles.point}>{item.subject1}</Text>
                  <Text style={styles.point}>{item.credits1}</Text>
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
          flex: 1,
          justifyContent: "center",
          marginBottom: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("StudyAgain")}
          style={styles.button}
        >
          <Text style={styles.txtBtn}>Đăng ký học lại</Text>
        </TouchableOpacity>
      </View>
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

export default Outcome;
