import React from 'react';
import ScheduleScreen from './ScheduleScreen';
import SettingsScreen from '../../settings/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const ScheduleStack = createNativeStackNavigator();

const ScheduleStackScreen = () => {
    return (
        <ScheduleStack.Navigator>
            <ScheduleStack.Screen name={"Schedule"} component={ScheduleScreen} options={{headerShown: false}} />
            <ScheduleStack.Screen name={"Settings"} component={SettingsScreen} options={{title: 'Настройки', headerBackTitle: 'Back'}} />
        </ScheduleStack.Navigator>
    );
};

export default ScheduleStackScreen;
