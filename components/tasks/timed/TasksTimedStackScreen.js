import React from 'react';
import TasksTimedScreen from './TasksTimedScreen';
import SettingsScreen from '../../settings/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const TasksTimedStack = createNativeStackNavigator();

const TasksTimedStackScreen = () => {
    return (
        <TasksTimedStack.Navigator screenOptions={{ headerShown: false }}>
            <TasksTimedStack.Screen name={"TasksTimed"} component={TasksTimedScreen} />
            <TasksTimedStack.Screen name={"Settings"} component={SettingsScreen} />
        </TasksTimedStack.Navigator>
    );
};

export default TasksTimedStackScreen;
