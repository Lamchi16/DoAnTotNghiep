/** @format */

import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "../../components/Header";

function Outcome(navigation) {
  const [name, Name] = React.useState("");
  const [clas, Class] = React.useState("");
  const [card, Card] = React.useState("");
  const [subjects, Subjects] = React.useState("");
  const [money, Money] = React.useState("");
  const [write, Write] = React.useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header style={styles.Header}></Header>

        <View style={styles.title}>
          <Text style={styles.titlee}>PHIẾU ĐĂNG KÝ HỌC LẠI </Text>
          <View style={styles.content}>
            <View style={styles.fullname}>
              <Text style={styles.fullnamee}>Họ, tên người nộp tiền: </Text>
              <TextInput
                style={styles.input}
                onChangeText={Name}
                value={name}
              />
            </View>

            <View style={styles.fullname}>
              <Text style={styles.fullnamee}>MSSV: </Text>
              <TextInput
                style={styles.input}
                onChangeText={Card}
                value={card}
              />
            </View>

            <View style={styles.fullname}>
              <Text style={styles.fullnamee}>Lớp: </Text>
              <TextInput
                style={styles.input}
                onChangeText={Class}
                value={clas}
              />
            </View>

            <View style={styles.fullname}>
              <Text style={styles.fullnamee}>Môn: </Text>
              <TextInput
                style={styles.input}
                onChangeText={Subjects}
                value={subjects}
              />
            </View>

            <View style={styles.fullname}>
              <Text style={styles.fullnamee}>Số tiền: </Text>
              <TextInput
                style={styles.input}
                onChangeText={Money}
                value={money}
              />
            </View>
            <View style={styles.fullname}>
              <Text style={styles.fullnamee}>Viết bằng chữ:</Text>
              <TextInput
                style={styles.input}
                onChangeText={Write}
                value={write}
              />
            </View>
            <View style={styles.button}>
              <TouchableOpacity style={styles.buttonn} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.txtButton}>Đăng ký</Text>
              </TouchableOpacity>
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
    </TouchableWithoutFeedback>
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
    textAlign: "center",
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
    flexDirection: "row",
  },
  fullnamee: {
    marginTop: 10,
  },
  input: {
    height: 20,
    width: 200,
    margin: 5,
    marginTop: 9,
  },
	button: {
		fontWeight: "bold",
		backgroundColor: "#cd1725",
		fontSize: 20,
		color: "#fff",
		width: 200,
		height: 40,
		borderRadius: 7,
		marginTop: 30,
		alignItems: "center",
		justifyContent: "center",
    alignSelf: "center"
	},
  txtButton: {
    color: "white",
    fontWeight: "600"
  }
});

export default Outcome;
