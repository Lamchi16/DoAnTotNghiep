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
	},
	content: {
		justifyContent: "center",
		paddingHorizontal: 16,
		paddingVertical: 20,
		marginTop: 50,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
		marginTop: 8,
	},
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
	},
	input: {
		width: 230,
		height: 40,
		backgroundColor: "rgba(0,0,0,.1)",
		borderRadius: 10,
		paddingHorizontal: 10,
		color: "black",
		fontSize: 18,

	},
	select: {
		flexDirection: "row",
		marginTop: 10,
	}
	
});
export default styles;
