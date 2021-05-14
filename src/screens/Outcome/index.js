/** @format */

import React from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
} from "react-native";
import Point from "../../data/Point";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

function Outcome() {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Header
				label={"Kết quả học tập"}
				goBack={() => navigation.goBack()}
				style={styles.Header}></Header>
			<FlatList
				style={styles.list}
				data={Point}
				renderItem={({ item }) => {
					if (item.point < 5) {
						return (
							<View style={styles.itemFail}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
									}}>
									<Text style={styles.subject}>
										{item.subject}
									</Text>
									<Text style={styles.point}>
										{item.point}
									</Text>
								</View>
								<Text style={styles.status}>Học lại</Text>
							</View>
						);
					} else {
						return (
							<View style={styles.itemPass}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
									}}>
									<Text style={styles.subject}>
										{item.subject}
									</Text>
									<Text style={styles.point}>
										{item.point}
									</Text>
								</View>
								<Text style={styles.status}>Qua môn</Text>
							</View>
						);
					}
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	list: {
		marginTop: 20,
	},
	itemFail: {
		backgroundColor: "#f55c47",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 10,
		borderColor: "#000",
	},
	itemPass: {
		backgroundColor: "#f6dcbf",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 10,
		borderColor: "#000",
	},
	title: {
		fontSize: 32,
	},
	point: {
		fontSize: 15,
	},
	subject: { fontWeight: "bold", fontSize: 18 },
	status: { fontStyle: "italic" },
});
export default Outcome;
