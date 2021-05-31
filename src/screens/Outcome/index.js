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
  ScrollView,
} from "react-native";
import Point from "../../data/Point";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "../Outcome/styles";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

function Outcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        label={"KẾT QUẢ HỌC TẬP"}
        goBack={() => navigation.goBack()}
        // rightButton={() => navigation.navigate("Semester1")}
        style={styles.Header}
      ></Header>
      <View style={styles.wrapper}>
        <View
          style={{
            marginTop: 50,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Semester1")}
            style={styles.button}
          >
            <Text style={styles.txtBtn}>Học kỳ 1</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.component}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Semester2")}
            style={styles.button}
          >
            <Text style={styles.txtBtn}>Học kỳ 2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.component}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Semester3")}
            style={styles.button}
          >
            <Text style={styles.txtBtn}>Học kỳ 3</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.component}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Semester4")}
            style={styles.button}
          >
            <Text style={styles.txtBtn}>Học kỳ 4</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.component}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Semester5")}
            style={styles.button}
          >
            <Text style={styles.txtBtn}>Học kỳ 5</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.component}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Semester6")}
            style={styles.button}
          >
            <Text style={styles.txtBtn}>Học kỳ 6</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Outcome;
