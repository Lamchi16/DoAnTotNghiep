/** @format */

import React from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";

function Schedule({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Sinh viên theo dõi lịch học lại trên website nhà trường</Text>
      <View
        style={{
          fontWeight: "bold",
          backgroundColor: "white",
          width: 150,
          height: 40,
          borderRadius: 7,
          marginTop: 30,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              color: "black",
              fontWeight: "600",
              fontSize: 13,
              textDecorationLine: "underline",
            }}
          >
            THOÁT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Schedule;
