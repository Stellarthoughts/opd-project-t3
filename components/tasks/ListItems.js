import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

function ListItem ({ el }) {
    return (
        <View style={styles.task}>
            <View style={styles.icon}>
                <Text style={styles.dataText}></Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{el.title}</Text>
                <View style={styles.tasks}>
                    <Text style={styles.countTasks}>{el.completedTask}</Text>
                    <Text style={styles.countTasks}>/</Text>
                    <Text style={styles.countTasks}>{el.countTask}</Text>
                    <View style={styles.progressBar}>
                        <View style={styles.progressBarValue}></View>
                    </View>
                </View>
            </View>
            <View style={styles.open}>
                <View style={styles.openCircle}>
                    <Text>V</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    task: {
        flexDirection: "row",
        width: "100%",
        height: "auto",
        backgroundColor: "#333",
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    icon: {
        flex: 1,
        height: "auto",
        padding: 10,
        backgroundColor: "#666",
    },

    info: {
        flex: 4,
        height: "auto",
        padding: 10,
        backgroundColor: "#444",
    },

    title: {
        backgroundColor: "#555",
    },

    tasks: {
        flexDirection: "row",
        backgroundColor: "#666",
    },

    countTasks: {
        backgroundColor: "#666",
    },

    progressBar: {
        backgroundColor: "#666",
    },

    progressBarValue: {
        backgroundColor: "#666",
    },

    open: {
        flex: 1,
        backgroundColor: "#777",
    },

    openCircle: {
        backgroundColor: "#888",
    }
});

export default ListItem;