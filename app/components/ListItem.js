import React from "react"
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import colors from "../config/colors"
import AppText from "./AppText"
import Swipeable from "react-native-gesture-handler/Swipeable"

const ListItem = ({
	title,
	subTitle,
	image,
	onPress,
	renderRightActions,
	IconComponent,
}) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title}>{title}</AppText>
						{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	)
}

export default ListItem

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 35,
		marginRight: 10,
	},
	detailsContainer: {
		justifyContent: "center",
		marginLeft: 10,
	},
	title: {
		fontWeight: "500",
	},
	subTitle: {
		color: colors.medium,
	},
})
