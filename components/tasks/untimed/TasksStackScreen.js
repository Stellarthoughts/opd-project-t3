import React from 'react';
import TasksScreen from './TasksScreen';
import SettingsScreen from '../../settings/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const TasksStack = createNativeStackNavigator();

const TasksStackScreen = () => {
    return (
        <TasksStack.Navigator screenOptions={{ headerShown: false }}>
            <TasksStack.Screen name={"Tasks"} component={TasksScreen} />
            <TasksStack.Screen name={"Settings"} component={SettingsScreen} />
        </TasksStack.Navigator>
    );
};

export default TasksStackScreen;
