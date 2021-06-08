/** @format */

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	warper: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		// paddingHorizontal: 16,
		// paddingTop: 20,
		// alignItems: "center",
		// flex: 1,
		// width: "auto"
		alignContent: "space-around",
		justifyContent: "space-between",
		paddingHorizontal: 15,
		paddingVertical: 30,
		marginTop: 5
		
	},
	line: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10
	},

	textLabel: {
		fontWeight: "bold",
		paddingRight: 5,
		fontSize: 13,
		margin: 5,
	},
	button: {
		fontWeight: "bold",
		backgroundColor: "#cd1725",
		fontSize: 20,
		color: "#000",
		width: 150,
		height: 40,
		borderRadius: 7,
		marginTop: 15,
		marginBottom: 10,
		alignItems: "center",
		 justifyContent: "center",
	},
	txtLogin: {
		fontSize: 20,
		color: "#fff",
		fontWeight: "bold",
	},
	checkboxContainer: {
		flexDirection: "row",
		// marginBottom: 20,
	},
	checkbox: {
		alignSelf: "center",
	},
	label: {
		margin: 8,
		marginLeft: 40,
	},
	input: {
		color: "black",
		marginTop: 3, 
		fontSize: 15
		
	}
	
});
export default styles;
