import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import colors from "../config/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const ViewImageScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons size={35} color="#ffff" name="close" />
			</View>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons
					size={35}
					color="#ffff"
					name="trash-can-outline"
				/>
			</View>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={require("../assets/chair.jpg")}
			/>
		</View>
	)
}

export default ViewImageScreen

const styles = StyleSheet.create({
	closeIcon: {
		position: "absolute",
		top: 40,
		left: 30,
		color: colors.white,
	},
	deleteIcon: {
		position: "absolute",
		top: 40,
		right: 30,
	},
	container: {
		backgroundColor: colors.black,
		flex: 1,
	},
	image: {
		width: "100%",
		height: "100%",
	},
})
