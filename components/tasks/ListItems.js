import React from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import ProgressBar from './ProgressBar';
import Images from '../../resources';

function ListItem({ el }) {
    //var {x, y, width, height};
    /*const layoutHandler = (event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
        console.log(x);
    };*/
    return (
        <View style={styles.task}>
            <View style={styles.icon}>
                <Image style={styles.openFolder} source={Images.tasks.openFolder}/>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{el.title}</Text>
                <View style={styles.tasks}>
                    <View /*onLayout={layoutHandler}*/ style={styles.tasksInfo}>
                        <Text style={styles.countTasks}>{el.completedTask}</Text>
                        <Text style={styles.countTasks}>/</Text>
                        <Text style={styles.countTasks}>{el.countTask}</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <ProgressBar
                            height={7}
                            backgroundColor={'#C9EDEC'}
                            completedColor={'#01CAC2'}
                            completed={el.completedTask}
                            count={el.countTask}
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
        marginLeft: 15,
        marginRight: 15,
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
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#E9E9E9",
    },

    info: {
        flex: 3,
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
        flexDirection: "row",
    },

    progressBar: {
        width: "90%",
        paddingLeft: "5%",
        paddingRight: "5%",
    },

    open: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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

    openFolder: {
        width: 54,
        height: 38,
    },
});

export default ListItem;