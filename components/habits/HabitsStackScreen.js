import React from 'react';
import HabitsScreen from './HabitsScreen';
import SettingsScreen from '../settings/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HabitsStack = createNativeStackNavigator();

const HabitsStackScreen = () => {
    return (
        <HabitsStack.Navigator screenOptions={{ headerShown: false }}>
            <HabitsStack.Screen name={"Habits"} component={HabitsScreen} />
            <HabitsStack.Screen name={"Settings"} component={SettingsScreen} />
        </HabitsStack.Navigator>
    );
};

export default HabitsStackScreen;
