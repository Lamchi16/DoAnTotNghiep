/** @format */

import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import Point from "../../data/Point";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
//import Item from "../Outcome/Item"

function Outcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        label={"Kết quả học tập"}
        goBack={() => navigation.goBack()}
        style={styles.Header}
      ></Header>
      <FlatList
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
                  <View style={{ fontSize: "30" }}>
                    <Text style={styles.semester}>{item.semester}</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      fontSize: "10",
                    }}
                  >
                    <Text style={styles.subject}>{item.subject}</Text>
                    <Text style={styles.point}>{item.point}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    marginTop: 20,
  },
  itemFail: {
    // backgroundColor: "#f55c47",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderColor: "#000",
  },
  itemPass: {
    // backgroundColor: "#f6dcbf",
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
	  marginBottom: 5
}
});
export default Outcome;
