/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "#fff",
	},
	itemFail: {
	  padding: 10,
	  marginVertical: 8,
	  marginHorizontal: 6,
	  borderRadius: 10,
	  borderColor: "#000",
	  marginTop: 20,
	},
	itemPass: {
	  padding: 20,
	  marginVertical: 8,
	  marginHorizontal: 6,
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
	  marginBottom: 5,
	},
	theory: {
	  fontSize: 17,
	  fontWeight: "900",
	  textDecorationLine: "underline",
	  marginBottom: 5,
	},
	text: { margin: 6 },
	button: {
		  fontWeight: "bold",
		  backgroundColor: "#cd1725",
		  color: "#fff",
		  width: 150,
		  height: 40,
		  borderRadius: 7,
		  marginTop: 30,
		  alignItems: "center",
		  justifyContent: "center",
		  marginLeft: 140
	  },
	  txtBtn: {
		  fontSize: 17,
		  color: "#fff",
		  fontWeight: "bold",
	  },
  });

export default styles;
