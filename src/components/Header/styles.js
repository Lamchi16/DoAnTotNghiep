/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		height: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderBottomColor: "#000",
		borderBottomWidth: 1,
	},
	header: {
		fontSize: 28,
		marginHorizontal: 60,
		fontWeight: "bold",
	},
	back: {
		position: "absolute",
		left: 15,
	},
	right: {
		position: "absolute",
		right: 15,
	},
	label: {
		fontSize: 30,
		fontWeight: "bold",
	},
	logo: {
		resizeMode: "stretch",
		width: "100%",
		height: 60,
		marginTop: 10,
	},
});

export default styles;
