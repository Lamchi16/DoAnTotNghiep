/** @format */

import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-community/picker";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
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

const StudyAgain = ({ navigation, route }) => {
  const { data, studentcode } = route.params;
  const [dvhplt, setDvhplt] = useState([]);
  const [dvhpth, setDvhpth] = useState([]);
  useEffect(() => {
    let _subject = [];
    data.lythuyet.map((e) => {
      {
        _subject.push({
          name: e[0],
        });
      }
    });
    let _dvhplt = [];
    data.lythuyet.map((e) => {
      _dvhplt.push(e[1]);
    });
    setDvhplt(_dvhplt);
    let _dvhpth = [];
    data.thuchanh.map((e) => {
      _dvhpth.push(e[1]);
    });
    setDvhpth(_dvhpth);

    setSubject(_subject);
  }, []);
  const [theory, setTheory] = useState(true);
  const [practice, setPractice] = useState(false);
  const [position, setPosition] = useState(null);
  const [subject, setSubject] = useState([]);
  const [subjectSelected, setSubjectSelected] = useState("");
  const [dvhp, setDvhp] = useState(0);
  const showTotal = () => {
    if (theory == true && practice == false) {
      let _dvhp = parseInt(dvhplt[position]);
      setDvhp(_dvhp);
    } else if (theory == false && practice == true) {
      let _dvhp = parseInt(dvhpth[position]);
      setDvhp(_dvhp);
    } else if (theory == true && practice == true) {
      let _dvhp = parseInt(dvhpth[position]) + parseInt(dvhplt[position]);
      setDvhp(_dvhp);
    } else {
      setDvhp(0);
    }
  };

  return (
    <View
      style={{
        flex: 1,
		backgroundColor: "white"

      }}
    >
      <Header
        label={`Đăng ký học lại kỳ ${data.type}`}
        goBack={() => navigation.goBack()}
        style={styles.Header}
      ></Header>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
		 
        }}
      >
        <View>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Text style={styles.textLabel}>Chọn môn:</Text>
            <Picker
              selectedValue={subjectSelected}
              style={{ height: 40, width: 300 }}
              onValueChange={(itemValue, itemPosition) => {
                setSubjectSelected(itemValue);
                setPosition(itemPosition);
              }}
            >
              {subject.map((e, index) => (
                <Picker.Item key={index} label={e.name} value={e.name} />
              ))}
            </Picker>
          </View>
          <Text style={styles.textLabel}>Chọn học phần:</Text>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.label}>Lý thuyết</Text>

              <CheckBox
                value={theory}
                onValueChange={setTheory}
                style={styles.checkbox}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.label}>Thực hành</Text>
              <CheckBox
                value={practice}
                onValueChange={setPractice}
                style={styles.checkbox}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={showTotal}
            style={{
              marginVertical: 20,
              borderRadius: 5,
              backgroundColor: "white",
              width: 200,
              paddingHorizontal: 10,
              paddingVertical: 5,
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "red", textAlign: "center", borderColor: "red", }}>
              Xem tổng tiền đăng ký
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.textLabel}>Số đơn vị học phần: {dvhp}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.textLabel}>Giá tiền/ĐVHP: 150.000 VNĐ</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.textLabel}>Tổng tiền: {dvhp * 150000} VNĐ</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Register", {
                  studentcode,
                  subjectSelected,
                  dvhp,
                })
              }
              style={{
                alignSelf: "center",
                width: 200,
                backgroundColor: "red",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                {" "}
                ĐĂNG KÝ{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default StudyAgain;

// import { useNavigation } from "@react-navigation/native";

// function StudyAgain({ navigation,route }) {

// 	const [subject, setSubject] = useState("");
// 	const [type, setType] = useState("theory");
// 	const [theory, setTheory] = useState(true);
// 	const [practice, setPractice] = useState(false);
// 	const [number, onChangeNumber] = useState(null);
// 	const {data} = route.params;
// 	const [dataFiltered,setDataFilterd] = useState(data.lythuyet);
// 	useEffect(()=>{
// 		console.log(theory);
// 		if(theory == true && practice == false){
// 			setDataFilterd(data.lythuyet);
// 		} else {
// 			setDataFilterd(data.thuchanh);
// 		}
// 		return ()=>{
// 			setDataFilterd(data.lythuyet);
// 		}
// 	},[dataFiltered])
// 	const handleOnchange = (itemValue,itemPosition) => {
// 		console.log({itemValue});
// 	}
// 	const handleRegistry = () => {
// 		if (subject.trim() === "" || theory.trim() === "" || practice.trim() === "" ||  number.trim() === "" ) {
// 			return Alert.alert("Vui lòng chọn đủ thông tin !");
// 		}
// 		{
// 			navigation.navigate("Register");
// 			return Alert.alert("Đăng kí thành công !");
// 		}
// 	};
// 	return (
// 		<View style={styles.warper}>
// 			<Header
// 				label={"ĐĂNG KÝ HỌC LẠI"}
// 				goBack={() => navigation.goBack()}
// 				style={styles.Header}
// 			></Header>

// 			<View style={{
// 				flex:1,
// 				paddingHorizontal:10,
// 				paddingTop:20,
// 				marginHorizontal:10,

// 			}}>
// 				{/* //CheckBox */}
// 				<Text style={styles.textLabel}>Chọn học phần:</Text>

// 				<View style={{
// 					flexDirection:'row'
// 				}}>

// 					<View style={{flexDirection:'row'}}>
// 						<Text style={styles.label}>Lý thuyết</Text>

// 						<CheckBox
// 							value={theory}
// 							onValueChange={setTheory}
// 							style={styles.checkbox}
// 						/>
// 					</View>

// 					<View style={{flexDirection:'row'}}>
// 						<Text style={styles.label}>Thực hành</Text>
// 						<CheckBox
// 							value={practice}
// 							onValueChange={setPractice}
// 							style={styles.checkbox}
// 						/>
// 					</View>
// 				</View>
// 				<View style={styles.line}>
// 					<Text style={styles.textLabel}>Chọn môn: </Text>

// 					<Picker
// 						selectedValue={subject}
// 						style={{ height: 40, width: 300 }}
// 						onValueChange={handleOnchange}
// 					>
// 						<Picker.Item label="" value="" />
// 						<Picker.Item label="Lập trình C" value="C" />
// 						<Picker.Item label="JAVA" value="JV" />

// 						<Picker.Item label="JavaScript" value="js" />
// 					</Picker>
// 				</View>

// 				<View style={styles.line}>
// 					<Text style={styles.textLabel}>Đơn vị học phần:</Text>
// 					<TextInput
// 						style={styles.input}
// 						onChangeText={onChangeNumber}
// 						value={number}
// 						placeholder="Nhập ĐVHP"
// 						keyboardType="numeric"
// 					/>
// 				</View>

// 				<View style={styles.line}>
// 					<Text style={styles.textLabel}>Tiền lý thuyết: </Text>
// 				</View>

// 				<View style={styles.line}>
// 					<Text style={styles.textLabel}>Tiền thực hành: </Text>
// 				</View>

// 				<View style={styles.line}>
// 					<Text style={styles.textLabel}>Tổng tiền: </Text>
// 				</View>

// 				{/* Button đăng ký học lại */}
// 				<View style={{alignItems: "center", marginTop: 30}}>
// 					<TouchableOpacity style={styles.button} onPress={handleRegistry}>
// 						<Text style={styles.txtLogin}>Đăng kí</Text>
// 					</TouchableOpacity>
// 				</View>

// 			</View>
// 		</View>
// 	);
// }
// export default StudyAgain;
