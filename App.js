import React from "react"
import { StyleSheet, Text, View } from "react-native"
import ViewImageScreen from "./app/screens/ViewImageScreen"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppButton from "./app/components/Button"
import Card from "./app/components/Card"

const App = () => {
	return (
		<View
			style={{
				backgroundColor: "#f8f4f",
				padding: 20,
				paddingTop: 100,
			}}>
			<Card
				title="Red Jacket for sale "
				subTitle="$100"
				image={require("./app/assets/jacket.jpg")}
			/>
		</View>
	)
}

export default App
