/** @format */

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	warper: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		paddingHorizontal: 16,
		paddingTop: 20,
		alignItems: "center",

		/* flexDirection: "row", */
	},
	picker: {},
	line: {
		flexDirection: "row",
		paddingVertical: 10,
	},

	textLabel: {
		fontWeight: "bold",
		width: 80,
		paddingRight: 10,
		fontSize: 20,
	},
	button: {
		fontWeight: "bold",
		backgroundColor: "#cd1725",
		fontSize: 100,
		color: "#000",
		width: 150,
		height: 50,
		borderRadius: 7,
		marginTop: 15,
		marginLeft: 10,
		marginRight: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	txtLogin: {
		fontSize: 20,
		color: "#fff",
		fontWeight: "bold",
	},
});
export default styles;
