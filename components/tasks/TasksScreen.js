import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import List from "./List";
import Header from '../common/Header';
 
function TasksScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <List/>
        </View>
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