import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import List from "./List";
import Header from '../common/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
 
function TasksScreen ({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <List/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        width: "100%",
        backgroundColor: '#ebebf1',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

});

export default TasksScreen;