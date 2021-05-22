import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header";
import Point from "../../../data/Point";
import Ionicons from "react-native-vector-icons/Ionicons";

function Semester6() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        label={"Kết quả học tập kỳ 6"}
        goBack={() => navigation.goBack()}
        style={styles.Header}
      ></Header>
      <FlatList
        style={styles.list}
        data={Point}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemFail}>
              <View
                style={{
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
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Outcome")}
            style={styles.back}
          >
            <Ionicons
              name="arrow-forward-circle-outline"
              size={20}
              color="black"
              style={styles.icon}
            ></Ionicons>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Semester5")}
            style={styles.back}
          >
            <Ionicons
              name="arrow-back-circle-outline"
              size={20}
              color="black"
              style={styles.icon}
            ></Ionicons>
          </TouchableOpacity>
        </View>
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 6,
    borderRadius: 10,
    borderColor: "#000",
    marginTop: 20,
  },
  itemPass: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
  button: {
    fontWeight: "bold",
    backgroundColor: "#cd1725",
    color: "#fff",
    width: 150,
    height: 40,
    borderRadius: 7,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 140,
  },
  txtBtn: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
  },
});
export default Semester6;
