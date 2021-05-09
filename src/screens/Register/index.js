/** @format */

import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Header from "../../components/Header";

function Outcome(navigation) {


  return (
    <View style={styles.container}>
      <Header style={styles.Header}></Header>

      <View style={styles.title}>
        <Text style={styles.titlee}>PHIẾU THU</Text>
        <View style={styles.content}>
          <View style={styles.fullname}>
            <Text style={styles.fullnamee}>Họ, tên người nộp tiền: </Text>
          </View>

          <View style={styles.fullname}>
            <Text style={styles.fullnamee}>Lớp: </Text>
          </View>

          <View style={styles.fullname}>
            <Text style={styles.fullnamee}>Môn: </Text>
          </View>

          <View style={styles.fullname}>
            <Text style={styles.fullnamee}>Số tiền: </Text>
            
          </View>
          <View style={styles.fullname}>
          <Text style={styles.fullnamee}>Viết bằng chữ:</Text>
            
          </View>
          

        </View>
      </View>
      <View>
        {/* <TouchableOpacity
         onPress={() => navigation.navigate("Login")}
          style={styles.back}><Text>Thoát</Text>
        </TouchableOpacity> */}
      </View>
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
    marginTop: 25,
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center"
  },
  content: {
    marginTop: 15,
    marginLeft: 4,
  },
  exit: {
    color: "#0000cc",
    fontWeight: "bold",
  },
  fullname: {
      flexDirection: "row"
  },
  fullnamee: {
      marginTop: 10,
  }, 

});

export default Outcome;
