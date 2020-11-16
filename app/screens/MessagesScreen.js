import React from "react"
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Platform,
	StatusBar,
} from "react-native"
import ListItem from "../components/ListItem"
import Screen from "../components/Screen"

const messages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../assets/jj.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../assets/jj.jpg"),
	},
	{
		id: 3,
		title: "T3",
		description: "D3",
		image: require("../assets/jj.jpg"),
	},
]

const MessagesScreen = () => {
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						image={item.image}
						title={item.title}
						subTitle={item.description}
					/>
				)}
			/>
		</Screen>
	)
}

export default MessagesScreen
