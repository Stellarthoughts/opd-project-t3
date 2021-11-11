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
        height: "auto",
        backgroundColor: "#FFFFFF",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        overflow: "hidden",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
    },

    icon: {
        flex: 1,
        height: "100%",
        backgroundColor: "#E9E9E9",
    },

    info: {
        flex: 4,
        height: "auto",
        padding: 10,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
    },

    tasks: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center",
    },

    countTasks: {
        fontSize: 18,
    },

    progressBar: {
        marginLeft: 15,
        marginRight: 15,
        width: "100%",
        height: 5,
        backgroundColor: "#C9EDEC",
        borderRadius: 8,
    },

    progressBarValue: {
    },

    open: {
        flex: 1,
    },

    openCircle: {
    }
});

export default ListItem;