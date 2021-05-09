import React from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import data from "../../data/Option";

function Option({ navigation }) {
  return (
    <View>
      <Dropdown label="Chon Khoa" data={data} />
      <TouchableOpacity
					onPress={() => navigation.navigate("Outcome")}
					style={styles.button}>
					<Text style={styles.txtBtn}>Chon</Text>
				</TouchableOpacity>
    </View>
  );
}
export default Option;
const styles = StyleSheet.create({
  button: {
    fontWeight: "bold",
    backgroundColor: "black",
    fontSize: 20,
    color: "#fff",
    width: 150,
    height: 50,
    borderRadius: 7,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  txtBtn: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  }
});
