import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ProgressBar from './ProgressBar';

function ListItem ({ el }) {
    return (
        <View style={styles.task}>
            <View style={styles.icon}>
                <Text style={styles.dataText}></Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{el.title}</Text>
                <View style={styles.tasks}>
                    <View style={styles.tasksInfo}>
                        <Text style={styles.countTasks}>{el.completedTask}</Text>
                        <Text style={styles.countTasks}>/</Text>
                        <Text style={styles.countTasks}>{el.countTask}</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={styles.progressBarValue}></View>
                        <ProgressBar
                            height={7}
                            backgroundColor={'#C9EDEC'}
                            completedColor={'#01CAC2'}
                            percentage={el.idCompleted}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.open}>
                <View style={styles.openCircle}>
                    <Text style={styles.openText}>ᐯ</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    task: {
        flex: 1,
        height: "auto",
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 8,
        borderRadius: 20,
        overflow: "hidden",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: "#fff",
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
        justifyContent: "space-between",
        alignItems: "center",
    },

    countTasks: {
        fontSize: 18,
    },

    tasksInfo: {
        flex: 1,
        flexDirection: "row",
    },

    progressBar: {
        marginLeft: 15,
        marginRight: 15,
        width: 170,
        height: 5,
        backgroundColor: "#C9EDEC",
        borderRadius: 8,
    },

    open: {
        flex: 1,
        justifyContent: "center",
    },

    openCircle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C9EDEC",
        width: 45,
        height: 45,
        borderRadius: 50,
    },

    openText: {
        color: "#01CAC2",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default ListItem;