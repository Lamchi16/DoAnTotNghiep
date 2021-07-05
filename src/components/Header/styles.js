/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		borderBottomColor: "#000",
		borderBottomWidth: 1,
		// backgroundColor: "#b22222"
	},
	header: {
		fontSize: 23,
		fontWeight: "bold",
		color: "#b22222",
	},
	back: {
		position: "absolute",
		left: 5,
	},
	right: {
		position: "absolute",
		right: 10,
	},

	logo: {
		resizeMode: "stretch",
		width: "100%",
		height: 60,
		marginTop: 10,
	},
});

export default styles;
