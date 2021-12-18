import React from 'react';
import HabitsScreen from './HabitsScreen';
import SettingsScreen from '../settings/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HabitsStack = createNativeStackNavigator();

const HabitsStackScreen = () => {
    return (
        <HabitsStack.Navigator>
            <HabitsStack.Screen name={"Habits"} component={HabitsScreen} options={{headerShown: false}} />
            <HabitsStack.Screen name={"Settings"} component={SettingsScreen} options={{title: 'Настройки', headerBackTitle: 'Back'}} />
        </HabitsStack.Navigator>
    );
};

export default HabitsStackScreen;
