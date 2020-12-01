import React, { useState } from "react"
import { StyleSheet, Switch, Text, TextInput, View } from "react-native"

import AccountScreen from "./app/screens/AccountScreen"
import AppButton from "./app/components/Button"
import AppPickerInput from "./app/components/AppPicker"
import AppTextInput from "./app/components/AppTextInput"
import Card from "./app/components/Card"
import Icon from "./app/components/Icon"
import ListItem from "./app/components/ListItem"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
import ListingsScreen from "./app/screens/ListingsScreen"
import LoginScreen from "./app/screens/LoginScreen"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import MessagesScreen from "./app/screens/MessagesScreen"
import Screen from "./app/components/Screen"
import ViewImageScreen from "./app/screens/ViewImageScreen"
import WelcomeScreen from "./app/screens/WelcomeScreen"

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
		<View>
			<LoginScreen />
		</View>
	)
}

export default App
