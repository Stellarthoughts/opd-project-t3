import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../common/Header';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Header navigation={navigation}/>
        </SafeAreaView>
    );
}

export default HomeScreen;
