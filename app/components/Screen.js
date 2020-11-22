import React from "react"
import {
	Platform,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native"

const Screen = ({ children }) => {
	return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
}

export default Screen

const styles = StyleSheet.create({
	screen: {
		paddingTop: StatusBar.currentHeight,
		flex: 1,
	},
})
