import React, {useState, useRef} from 'react';
import { StyleSheet, View, FlatList, Text, Image, Animated, TextInput, Modal } from 'react-native';
import Images from '../../resources';
import CButton from '../common/CButton';

function ListItem({ el }) {
    // Вывод элемента
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <TextInput style={styles.title}>{el.title}</TextInput>
                <View style={ styles.circles }>
                    <View style={styles.open}>
                        <View style={styles.openCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle} />
                    </View>
                    <View style={styles.opSquare}>
                        <View style={styles.openSquare} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 8,
        overflow: "hidden",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        paddingBottom: 10,
    },

    subtask: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
    },

    subtaskItem: {
        marginBottom: 5,
    },

    subtaskItemText: {
        color: "#555",
        fontSize: 16,
    },

    task: {
        height: 80,
        flexDirection: "row",
        //backgroundColor: "#FFFFFF",
        //borderRadius: 20,
        overflow: "hidden",
        //shadowColor: '#000',
        //shadowOffset: { width: 0, height: 2 },
       // shadowOpacity: 0.8,
       // shadowRadius: 2,
        elevation: 4,
        backgroundColor: "#fff",
    },

    icon: {
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#E9E9E9",
    },

    info: {
        flex: 1,
        height: "auto",
        padding: 10,
    },

    title: {
        color: "#444",
        fontSize: 20,
        marginBottom: 15,
        fontWeight: "bold",
    },

    tasks: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    countTasks: {
        color: "#444",
        fontSize: 18,
    },

    tasksInfo: {
        flexDirection: "row",
    },

    circles: {
        paddingLeft: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    open: {
        justifyContent: "center",
        alignItems: "center",
    },

    openCircle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        width: 25,
        height: 25,
        borderRadius: 50,
    },

    opSquare: {
        marginLeft: 30,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    openSquare: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#565656",
        width: 27,
        height: 27,
    },

    openText: {
        color: "#01CAC2",
        fontSize: 20,
        fontWeight: "bold",
        fontWeight: "normal",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
    },

    openFolder: {
        width: 54,
        height: 38,
    },
});

export default ListItem;