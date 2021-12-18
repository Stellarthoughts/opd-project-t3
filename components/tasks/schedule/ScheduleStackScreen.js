import React from 'react';
import ScheduleScreen from './ScheduleScreen';
import SettingsScreen from '../../settings/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const ScheduleStack = createNativeStackNavigator();

const ScheduleStackScreen = () => {
    return (
        <ScheduleStack.Navigator screenOptions={{ headerShown: false }}>
            <ScheduleStack.Screen name={"Schedule"} component={ScheduleScreen} />
            <ScheduleStack.Screen name={"Settings"} component={SettingsScreen} />
        </ScheduleStack.Navigator>
    );
};

export default ScheduleStackScreen;
