import React, { useState } from "react"
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
import ListItemDeleteAction from "../components/ListItemDeleteAction"
import ListItemSeparator from "../components/ListItemSeparator"
import Screen from "../components/Screen"

const initialMessages = [
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
	const [messages, setMessages] = useState(initialMessages)
	const [refreshing, setRefreshing] = useState(false)
	const handlerDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id))
	}
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
						onPress={() => console.log(item)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handlerDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: "T2",
							description: "D2",
							image: require("../assets/jj.jpg"),
						},
					])
				}}
			/>
		</Screen>
	)
}

export default MessagesScreen
