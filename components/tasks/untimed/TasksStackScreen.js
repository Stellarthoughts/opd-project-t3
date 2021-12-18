import React from 'react';
import TasksScreen from './TasksScreen';
import SettingsScreen from '../../settings/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const TasksStack = createNativeStackNavigator();

const TasksStackScreen = () => {
    return (
        <TasksStack.Navigator>
            <TasksStack.Screen name={"Tasks"} component={TasksScreen} options={{headerShown: false}} />
            <TasksStack.Screen name={"Settings"} component={SettingsScreen} options={{title: 'Настройки', headerBackTitle: 'Back'}} />
        </TasksStack.Navigator>
    );
};

export default TasksStackScreen;
