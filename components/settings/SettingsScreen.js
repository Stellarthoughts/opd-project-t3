import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../common/Header';

function SettingsScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Header navigation={navigation}/>
            <Text>What?</Text>
        </SafeAreaView>
    );
}

export default SettingsScreen;