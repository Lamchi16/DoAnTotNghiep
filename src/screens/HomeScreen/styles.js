/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	Header: {
		fontWeight: "bold",
		fontSize: 30,
		color: "#cd1725",
	},

	info: {
		marginTop: 10
	},
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
		marginLeft: 140,
	},
	txtBtn: {
		fontSize: 20,
		color: "#fff",
		fontWeight: "bold",
	},
	StyleImage: {
		width: 150,
		height: 200,
		marginTop: 20,
		borderRadius: 10,
		borderColor: "#fff",
	},
	lineInfo: {
		alignContent: "space-around",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 30,
		paddingVertical: 5,
	},
	textInfo: { fontSize: 20 },
});
export default styles;
