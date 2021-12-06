import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../common/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SettingsScreen({navigation}) {
    return (
        <SafeAreaView>
            <Header navigation={navigation}/>
            <Button onPress={() => AsyncStorage.clear()} title="Очистить данные пользователя"></Button>
        </SafeAreaView>
    );
}

export default SettingsScreen;