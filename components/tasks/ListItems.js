import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

export const ListItem = ({ el }) => {
    return (
        <View style={styles.box}>
            <View style={styles.data}>
                <Text style={styles.dataText}>{el.data}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyTitle}>{el.title}</Text>
                <View style={styles.tasks}>
                    <View style={styles.task}></View>
                    <View style={styles.task}></View>
                    <View style={styles.task}></View>
                </View>
            </View>
            <View style={styles.checked}>
                <Text style={styles.checkedText}>✓</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        padding: 10,
        backgroundColor: "#4c4c5d",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    data: {
        flex: 1,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },

    dataText: {
        color: "#ffffff",
        fontSize: 36,
    },

    body: {
        flex: 4,
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    bodyTitle: {
        color: "#ffffff",
        padding: 2,
        fontSize: 22,
    },

    tasks: {
        flexDirection: "row",
        flex: 1,
        padding: 2,
    },

    task: {
        width: 15,
        height: 15,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: "#7c7c7c"
    },

    checked: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkedText: {
        color: "#4fb737",
        fontSize: 36,
    },
});