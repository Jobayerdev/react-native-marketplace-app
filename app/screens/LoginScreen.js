import { Image, StyleSheet, Text, View } from "react-native"

import AppButton from "../components/Button"
import AppTextInput from "../components/AppTextInput"
import React from "react"
import Screen from "../components/Screen"

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<AppTextInput
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Email"
				icon="email"
				keyboardType="email-address"
				textContentType="emailAddress"
			/>
			<AppTextInput
				autoCapitalize="none"
				autoCorrect={false}
				icon="lock"
				placeholder="Password"
				textContentType="password"
				secureTextEntry
			/>
			<AppButton title="Login" onPress={() => console.log("jjjj")} />
		</Screen>
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
})
