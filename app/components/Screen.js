import {
	Platform,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native"

import React from "react"

const Screen = ({ children, style }) => {
	return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
}

export default Screen

const styles = StyleSheet.create({
	screen: {
		paddingTop: StatusBar.currentHeight,
		flex: 1,
	},
})
