import React, { Fragment, useState } from "react"
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../config/colors"
import AppText from "./AppText"
import PickerItem from "./PickerItem"

const AppPickerInput = ({
	icon,
	items,
	selectedItem,
	onSelectItem,
	placeholder,
}) => {
	const [modalVisible, setModalVisible] = useState(false)
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={colors.medium}
							style={styles.icon}
						/>
					)}
					<AppText style={styles.text}>
						{selectedItem ? selectedItem.label : placeholder}
					</AppText>
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={colors.medium}
						style={styles.icon}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Button title="Close" onPress={() => setModalVisible(false)} />
				<FlatList
					data={items}
					keyExtractor={(item) => item.value.toString()}
					renderItem={({ item }) => (
						<PickerItem
							label={item.label}
							onPress={() => {
								onSelectItem(item)
								setModalVisible(false)
							}}
						/>
					)}
				/>
			</Modal>
		</>
	)
}

export default AppPickerInput

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.dark,
		borderRadius: 25,
		flexDirection: "row",
		backgroundColor: "#dddd",
		alignItems: "center",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
	textInput: {
		fontSize: 18,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
})
