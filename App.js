import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaView } from 'react-native-safe-area-context';
import TasksStackScreen from './components/tasks/untimed/TasksStackScreen';
import HabitsStackScreen from './components/habits/HabitsStackScreen';
import TasksTimedStackScreen from './components/tasks/timed/TasksTimedStackScreen';
import ScheduleStackScreen from './components/tasks/schedule/ScheduleStackScreen';
import Images from './resources';

const Tab = createBottomTabNavigator();

const tasksActiveIcon = Images.tabBar.tasksActive;
const tasksDisabledIcon = Images.tabBar.tasksDisabled;
const tasksTimedActiveIcon = Images.tabBar.tasksTimedActive;
const tasksTimedDisabledIcon = Images.tabBar.tasksTimedDisabled;
const scheduleActiveIcon = Images.tabBar.scheduleActive;
const scheduleDisabledIcon = Images.tabBar.scheduleDisabled;
const habbitsActiveIcon = Images.tabBar.habbitsActive;
const habbitsDisabledIcon = Images.tabBar.habbitsDisabled;

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
			<MyStatusBar backgroundColor="#F3F3F3" barStyle="light-content" />
			<Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'TasksStack') {
						iconName = focused
							? tasksActiveIcon
							: tasksDisabledIcon;
					} else if (route.name === 'TasksTimedStack') {
						iconName = focused
							? tasksTimedActiveIcon
							: tasksTimedDisabledIcon;
					} else if (route.name === 'ScheduleStack') {
						iconName = focused
							? scheduleActiveIcon
							: scheduleDisabledIcon;
					} else if (route.name === 'HabitsStack') {
						iconName = focused
							? habbitsActiveIcon
							: habbitsDisabledIcon;
					}

					return <Image source={iconName} style={{
						height: route.name === 'TasksStack' ? 37 : 35, width: route.name === 'TasksStack' ? 45 : 39, 
						marginTop: 6, marginLeft: 3, marginBottom: 9
					}}/>;
				},
				tabBarActiveTintColor: '#fff',
				tabBarInactiveTintColor: 'gray',
				tabBarStyle: {
					height: 60,
					backgroundColor: '#FFFFFF',
				},
				tabBarShowLabel: false
			})}
			>
				<Tab.Group screenOptions={{ headerShown: false }}>
					<Tab.Screen name="TasksStack" component={TasksStackScreen}/>
					<Tab.Screen name="TasksTimedStack" component={TasksTimedStackScreen}/>
					<Tab.Screen name="ScheduleStack" component={ScheduleStackScreen}/>
					<Tab.Screen name="HabitsStack" component={HabitsStackScreen}/>
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
