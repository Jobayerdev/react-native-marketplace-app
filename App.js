import React, { useState } from "react"
import { StyleSheet, Switch, Text, TextInput, View } from "react-native"
import ViewImageScreen from "./app/screens/ViewImageScreen"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppButton from "./app/components/Button"
import Card from "./app/components/Card"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
import MessagesScreen from "./app/screens/MessagesScreen"
import Icon from "./app/components/Icon"
import Screen from "./app/components/Screen"
import ListItem from "./app/components/ListItem"
import AccountScreen from "./app/screens/AccountScreen"
import ListingsScreen from "./app/screens/ListingsScreen"
import AppTextInput from "./app/components/AppTextInput"
import AppPickerInput from "./app/components/AppPicker"

const categories = [
	{
		label: "Furniture",
		value: 1,
	},
	{
		label: "Clothing",
		value: 2,
	},
	{
		label: "Cameras",
		value: 3,
	},
]

const App = () => {
	const [isNew, setIsNew] = useState(false)
	const [category, setCategory] = useState("")
	return (
		<Screen>
			<View>
				<AppPickerInput
					items={categories}
					placeholder="Category"
					icon="apps"
					selectedItem={category}
					onSelectItem={(item) => setCategory(item)}
				/>
				<AppTextInput placeholder="Email" icon="email" />
			</View>
		</Screen>
	)
}

export default App
