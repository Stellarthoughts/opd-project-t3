import React from 'react';
import TasksTimedScreen from './TasksTimedScreen';
import SettingsScreen from '../../settings/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const TasksTimedStack = createNativeStackNavigator();

const TasksTimedStackScreen = () => {
    return (
        <TasksTimedStack.Navigator>
            <TasksTimedStack.Screen name={"TasksTimed"} component={TasksTimedScreen} options={{headerShown: false}} />
            <TasksTimedStack.Screen name={"Settings"} component={SettingsScreen} options={{title: 'Настройки', headerBackTitle: 'Back'}} />
        </TasksTimedStack.Navigator>
    );
};

export default TasksTimedStackScreen;
