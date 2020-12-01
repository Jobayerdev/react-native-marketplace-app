import * as Yup from "yup"

import { Image, StyleSheet, Text, View } from "react-native"
import React, { Fragment } from "react"

import AppButton from "../components/Button"
import AppText from "../components/AppText"
import AppTextInput from "../components/AppTextInput"
import { Formik } from "formik"
import Screen from "../components/Screen"

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
})

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				{({ handleChange, handleSubmit, errors }) => (
					<Fragment>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder="Email"
							icon="email"
							keyboardType="email-address"
							textContentType="emailAddress"
							onChangeText={handleChange("email")}
						/>
						<AppText style={{ color: "red" }}>{errors.email}</AppText>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							placeholder="Password"
							textContentType="password"
							onChangeText={handleChange("password")}
							secureTextEntry
						/>
						<AppText style={{ color: "red" }}>{errors.password}</AppText>
						<AppButton title="Login" onPress={handleSubmit} />
					</Fragment>
				)}
			</Formik>
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
