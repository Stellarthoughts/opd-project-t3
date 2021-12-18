import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TasksScreen from './components/tasks/untimed/TasksScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsScreen from './components/settings/SettingsScreen';
import HabitsScreen from './components/habits/HabitsScreen';
import TasksTimedScreen from './components/tasks/timed/TasksTimedScreen';
import ScheduleScreen from './components/tasks/schedule/ScheduleScreen';
import Header from './components/common/Header';
import Images from './resources';

const Tab = createBottomTabNavigator();
const tasksImage = Images.header.tasks;
const tasksTimedImage = Images.header.tasks;
const schedule = Images.header.building;
const habbits = Images.header.like;
const settings = Images.header.settings;

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
			<Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Tasks') {
						iconName = focused
							? tasksImage
							: tasksImage;
					} else if (route.name === 'TasksTimed') {
						iconName = focused
							? tasksTimedImage
							: tasksTimedImage;
					} else if (route.name === 'Schedule') {
						iconName = focused
							? schedule
							: schedule;
					} else if (route.name === 'Habits') {
						iconName = focused
							? habbits
							: habbits;
					} else if (route.name === 'Settings') {
						iconName = focused
							? settings
							: settings;
					}

					return <Image source={iconName} style={{
						height: 30, width: 34, marginTop: 6, marginLeft: 3, marginBottom: 9,
					}}/>;
				},
				tabBarActiveTintColor: '#fff',
				tabBarInactiveTintColor: 'gray',
				tabBarStyle: {
					height: 60,
					backgroundColor: '#05CEB6',
				},
				tabBarShowLabel: false
			})}
			>
				<Tab.Group screenOptions={{ headerShown: false }}>
					<Tab.Screen name="Tasks" component={TasksScreen}/>
					<Tab.Screen name="TasksTimed" component={TasksTimedScreen}/>
					<Tab.Screen name="Schedule" component={ScheduleScreen}/>
					<Tab.Screen name="Habits" component={HabitsScreen}/>
					<Tab.Screen name="Settings" component={SettingsScreen}/>
				</Tab.Group>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 34 : 56;

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
