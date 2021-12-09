import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, CancelButton } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TasksScreen from './components/tasks/untimed/TasksScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsScreen from './components/settings/SettingsScreen';
import HabitsScreen from './components/habits/HabitsScreen';
import TasksTimedScreen from './components/tasks/timed/TasksTimedScreen';
import ScheduleScreen from './components/tasks/schedule/ScheduleScreen';

const Tab = createBottomTabNavigator();

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
			<Tab.Navigator initialRouteName="Home" tabBar={() => null}>
				<Tab.Group screenOptions={{ headerShown: false }}>
					<Tab.Screen name="Tasks" component={TasksScreen}/>
					<Tab.Screen name="TasksTimed" component={TasksTimedScreen}/>
					<Tab.Screen name="Habits" component={HabitsScreen}/>
					<Tab.Screen name="Schedule" component={ScheduleScreen}/>
					<Tab.Screen name="Settings" component={SettingsScreen}/>
				</Tab.Group>
			</Tab.Navigator>
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