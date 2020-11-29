import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
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

const App = () => {
	return (
		<Screen>
			<View>
				<AppTextInput icon="mail" placeholder="Username" />
			</View>
		</Screen>
	)
}

export default App
