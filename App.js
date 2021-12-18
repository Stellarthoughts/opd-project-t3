import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, CancelButton } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TasksScreen from './components/tasks/untimed/TasksScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsScreen from './components/settings/SettingsScreen';
import HabitsScreen from './components/habits/HabitsScreen';
import TasksTimedScreen from './components/tasks/schedule/ScheduleScreen';
import ScheduleScreen from './components/tasks/schedule/ScheduleScreen';

const Stack = createNativeStackNavigator();

const MyStatusBar = ({backgroundColor, ...props}) => (
	<View style={[styles.statusBar, { backgroundColor }]}>
	  <SafeAreaView>
		<StatusBar translucent backgroundColor={backgroundColor} {...props} />
	  </SafeAreaView>
	</View>
);

function App() {
	return (
		<NavigationContainer style={styles.container}>
			<MyStatusBar backgroundColor="#05CEB6" barStyle="light-content" />
			<Stack.Navigator initialRouteName="Home">
				<Stack.Group screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Tasks" component={TasksScreen}/>
					<Stack.Screen name="TasksTimed" component={TasksTimedScreen}/>
					<Stack.Screen name="Habits" component={HabitsScreen}/>
					<Stack.Screen name="Schedule" component={ScheduleScreen}/>
					<Stack.Screen name="Settings" component={SettingsScreen}/>
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
	},
	statusBar: {
		height: STATUSBAR_HEIGHT,
	},
	appBar: {
		backgroundColor:'#05CEB6',
		height: APPBAR_HEIGHT,
	}
});

export default App;