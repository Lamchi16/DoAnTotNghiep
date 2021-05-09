/** @format */

import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Login from "../../screens/Login";

function Outcome(navigation) {
  return (
    <View style={styles.container}>
      <Header style={styles.Header}></Header>
      {/* <View>
        <TouchableOpacity
         onPress={() => navigation.navigate("Login")}
          style={styles.back}><Text>Thoát</Text>
        </TouchableOpacity>
      </View> */}
	  
      <View style={styles.title}>
        <Text style={styles.titlee}>KẾT QUẢ HỌC TẬP</Text>
		<View style={styles.content}>
			<Text style={styles.titlee}>BẢNG ĐIỂM LỚP: LTMT2K10</Text>
			<Text style={styles.titlee}> - SINH VIÊN: LTMT2K10 </Text>
		</View>
		
      </View>
	  <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.exit}>Thoát</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
	marginLeft: 6,
  },
  Header: {
    fontWeight: "bold",
    fontSize: 30,
  },
  back: {
    position: "absolute",
    left: 15,
  },
  titlee: {
    marginTop: 15,
    color: "#cd1725",
    // marginLeft: 6,
    fontWeight: "bold",
  },
  content: {
	  flexDirection: "row"
  },
  exit: {
	  color: "#0000cc",
	  fontWeight: "bold",

  }
});

export default Outcome;
