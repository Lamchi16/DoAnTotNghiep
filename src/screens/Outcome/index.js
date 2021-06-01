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
import point from '../../data/point.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Outcome = (props) => {
  const {studentcode} = props.route.params;
  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        label={"KẾT QUẢ HỌC TẬP"}
        goBack={() => navigation.goBack()}
        // rightButton={() => navigation.navigate("Semester1")}
        style={styles.Header}
      >
      </Header>
      <View style={styles.wrapper}>
      {
          point.semester.map(se => (
            <View 
              key={se.type}
              style={{
                marginVertical: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Semester",{point:se,studentcode})}
                style={styles.button}
              >
                <Text style={styles.txtBtn}>Học kỳ {se.type}</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    </View>
  )
}


export default Outcome;
