/** @format */

import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-community/picker";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  CheckBox,
  ActivityIndicator,
} from "react-native";
import styles from "../StudyAgain/styles";
import Header from "../../components/Header";
import SelectMultiple from "react-native-select-multiple";

const StudyAgain = ({ navigation, route }) => {
  const { data, studentcode } = route.params;
  // const [dvhplt, setDvhplt] = useState([]);
  // const [dvhpth, setDvhpth] = useState([]);
  useEffect(() => {
    let _subjectLythuyet = [];
    let _subjectThuchanh = [];

    //them mon ly thuyet
    data.lythuyet.map((e) => {
      {
        _subjectLythuyet.push({
          name: e[1],
          lythuyet: e[2],
        });
      }
    });
    //console.log(data.lythuyet);

    //them mon thuc hanh
    //console.log(data.thuchanh);
    data.thuchanh.map((e) => {
      {
        _subjectThuchanh.push({
          name: e[1],
          thuchanh: e[2],
        });
      }
    });
    //console.log(_subjectThuchanh);

    //  merge two array
    const map = new Map();
    _subjectLythuyet.forEach((item) => map.set(item.name, item));
    _subjectThuchanh.forEach((item) =>
      map.set(item.name, { ...map.get(item.name), ...item })
    );
    const mergedArr = Array.from(map.values());
    //console.log(mergedArr);

    setSubject(mergedArr);
    showTotal();
  }, []);

  const [type, setType] = useState([]);
  const [position, setPosition] = useState(null);
  const [subject, setSubject] = useState([]);
  const [subjectSelected, setSubjectSelected] = useState("");
  const [dvhp, setDvhp] = useState(0);
  const [dvhplt, setDvhplt] = useState(0);
  const [dvhpth, setDvhpth] = useState(0);
  const showTotal = (selectedType) => {
    setDvhp(0);
    setDvhplt(0);
    setDvhpth(0);

    let type_array = [];
    // console.log(selectedType);
    if (selectedType) {
      selectedType.map((type) => {
        type_array.push(type.value);
      });
    }
    console.log(type_array);
    let _dvhp = 0;
    let _dvhplt = 0;
    let _dvhpth = 0;
    try {
      //check xem đangg chọn checkbox lý thuyết hay thực hành hay là cả 2
      if (
        type_array.includes("Lý thuyết") &&
        !type_array.includes("Thực hành")
      ) {
        _dvhplt = parseInt(subject[position - 1].lythuyet);
        _dvhp = 0;
        _dvhpth = 0;
      } else if (
        !type_array.includes("Lý thuyết") &&
        type_array.includes("Thực hành")
      ) {
        _dvhpth = parseInt(subject[position - 1].thuchanh);
        _dvhp = 0;
        _dvhplt = 0;
      } else if (
        type_array.includes("Lý thuyết") &&
        type_array.includes("Thực hành")
      ) {
        _dvhp =
          parseInt(subject[position - 1].lythuyet) +
          parseInt(subject[position - 1].thuchanh);
        _dvhplt = parseInt(subject[position - 1].lythuyet);
        _dvhpth = parseInt(subject[position - 1].thuchanh);
      } else {
        _dvhp = 0;
        _dvhplt = 0;
        _dvhpth = 0;
      }
    } catch (error) {
      console.log(error);
    }
    // trả về NaN thì alert - To Check Value is a Number or Not
    if (isNaN(_dvhp) || isNaN(_dvhplt) || isNaN(_dvhpth)) {
      Alert.alert("Lỗi", "Học phần này không có lý thuyết hoặc thực hành", [
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    } else {
      setDvhp(_dvhp);
      setDvhpth(_dvhpth);
      setDvhplt(_dvhplt);
    }
    setType(selectedType);
  };
  console.log(data);
  const handleRegistry = () => {
    console.log({ type });
    if (
      !studentcode ||
      !subjectSelected ||
      type == undefined ||
      type.length === 0
    ) {
      return Alert.alert("Vui lòng chọn đủ thông tin !");
    }
    {
      navigation.navigate("Register", {
        semester: data.type,
        studentcode,
        subjectSelected,
        dvhp: dvhplt + dvhpth,
        money: dvhplt * 150000 + dvhpth * 200000,
      });
      return Alert.alert("Đăng kí thành công !");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Header
        label={`ĐĂNG KÝ HỌC LẠI HỌC KỲ ${data.type}`}
        goBack={() => navigation.goBack()}
        style={styles.Header}
      ></Header>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
        }}
      >
        <View>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                paddingRight: 5,
                fontSize: 13,
                margin: 5,
                marginTop: 12,
              }}
            >
              CHỌN MÔN:
            </Text>
            <Picker
              selectedValue={subjectSelected}
              style={{ height: 40, width: 300 }}
              onValueChange={(itemValue, itemPosition) => {
                setSubjectSelected(itemValue);
                setPosition(itemPosition);
                setType([]);
              }}
            >
              <Picker.Item label={"Chọn môn học"} />
              {subject.map((e, index) => (
                <Picker.Item key={index} label={e.name} value={e.name} />
              ))}
            </Picker>
          </View>
          <View>
            <Text style={styles.textLabel}>CHỌN HỌC PHẦN:</Text>
            <SelectMultiple
              items={["Thực hành", "Lý thuyết"]}
              selectedItems={type}
              onSelectionsChange={(selected) => showTotal(selected)}
            />
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.textLabel}>SỐ ĐVHP LÝ THUYẾT: {dvhplt}</Text>
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={styles.textLabel}>SỐ ĐVHP THỰC HÀNH: {dvhpth}</Text>
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={styles.textLabel}>
              ĐƠN GIÁ 1 ĐVHP LÝ THUYẾT : 150.000 VNĐ
            </Text>
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={styles.textLabel}>
              ĐƠN GIÁ 1 ĐVHP THỰC HÀNH: 200.000 VNĐ
            </Text>
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={styles.textLabel}>
              GIÁ TIỀN LÝ THUYẾT:{" "}
              {(dvhplt * 150000)
                .toFixed(0)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "}
              VNĐ
            </Text>
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={styles.textLabel}>
              GIÁ TIỀN THỰC HÀNH:{" "}
              {(dvhpth * 200000)
                .toFixed(0)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "}
              VNĐ
            </Text>
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={styles.textLabel}>
              TỔNG TIỀN:{" "}
              {(dvhplt * 150000 + dvhpth * 200000)
                .toFixed(0)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "}
              VNĐ
            </Text>
            {/*  */}
          </View>

          <View style={{ marginVertical: 5 }}>
            <TouchableOpacity
              onPress={() => handleRegistry()}
              style={{
                alignSelf: "center",
                width: 150,
                backgroundColor: "#cd1725",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 50,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                ĐĂNG KÝ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default StudyAgain;
