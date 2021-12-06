import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, CancelButton } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/home/HomeScreen';
import TasksScreen from './components/tasks/untimed/TasksScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsScreen from './components/settings/SettingsScreen';
import HabitsScreen from './components/habits/HabitsScreen';
import TasksTimedScreen from './components/tasks/timed/TasksTimedScreen';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Group screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Tasks" component={TasksScreen}/>
					<Stack.Screen name="TasksTimed" component={TasksTimedScreen}/>
					<Stack.Screen name="Habits" component={HabitsScreen}/>
					<Stack.Screen name="Home" component={HomeScreen}/>
					<Stack.Screen name="Settings" component={SettingsScreen}/>
					
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
	},
});

export default App;