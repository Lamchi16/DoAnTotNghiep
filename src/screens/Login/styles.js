/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
	textinput: {
		width: 300,
		height: 40,
		backgroundColor: "rgba(0,0,0,.1)",
		borderRadius: 10,
		marginBottom: 10,
		paddingHorizontal: 40,
		color: "black",
		fontSize: 18,
	},
	username: {
		marginBottom: 10,
	},

	content:{
		textAlign: "center",
		marginBottom: 10,
		fontSize: 20,
		fontWeight: "bold",
		color: "#cd1725",
	},
	button: {
		fontWeight: "bold",
		backgroundColor: "#cd1725",
		fontSize: 20,
		color: "#fff",
		width: 300,
		height: 50,
		borderRadius: 7,
		marginTop: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		resizeMode: "stretch",
		width: 300,
		height: 80,
		marginBottom: 30,
	},
	icon: {
		position: "absolute",
		top: 10,
		left: 10,
	},
	TextSignUp: {
		color: "blue",
		textDecorationLine: "underline",
		fontSize: 20,
	},
	view: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	},
	txtLogin: {
		fontSize: 20,
		color: "#fff",
		fontWeight: "bold",
	},
});
export default styles;
