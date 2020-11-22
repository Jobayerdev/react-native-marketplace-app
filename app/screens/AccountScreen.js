import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import ListItem from "../components/ListItem"
import Screen from "../components/Screen"
import image from "../assets/jj.jpg"
import colors from "../config/colors"
import Icon from "../components/Icon"
import ListItemSeparator from "../components/ListItemSeparator"

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
	},
]

const AccountScreen = () => {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Jobayer Hossain"
					subTitle="mail@jobayer.com"
					image={image}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
				/>
			</View>
			<ListItem
				title="Log Out"
				IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
			/>
		</Screen>
	)
}

export default AccountScreen

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	screen: {
		backgroundColor: colors.light,
	},
})
