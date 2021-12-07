import React, {useState, useRef} from 'react';
import { StyleSheet, View, FlatList, Text, Image, Animated, TextInput, CheckBox, Button } from 'react-native';
import ProgressBar from '../ProgressBar';
import Images from '../../../resources';
import CButton from '../../common/CButton';
import SubtaskList from '../SubtaskList';

function ListItem({ el,deleteHandler }) {
    const [ListOfItems, setListItem] = useState(el.subtasksItem)
    var isOpenDropMenu = false

    // Анимация
    const animate_state = {
        start: 0,
        end: 1,
    }
    const value = useRef(new Animated.Value(animate_state.start)).current
    const startAnimate = (event) => {
        if (isOpenDropMenu) {
            Animated.timing(value, {toValue: animate_state.start, useNativeDriver: false, duration: 500}).start()
        }
        else {
            Animated.timing(value, {toValue: animate_state.end, useNativeDriver: false, duration: 500}).start()
        }
        isOpenDropMenu = !isOpenDropMenu
    }
    const inputRange = Object.values(animate_state)
    const height = value.interpolate({ inputRange, outputRange: [71.2727279663086, 238.5454559326172] })
    const rotate = value.interpolate({ inputRange, outputRange: ["0deg", "180deg"] })

    
    // Вывод элемента
    return (
        <Animated.View style={[styles.container, {height}]}>
            <View style={styles.task}>
                <View style={styles.icon}>
                    <Image style={styles.openFolder} source={Images.tasks.openFolder}/>
                </View>
                <View style={styles.info}>
                    <TextInput style={styles.title}>{el.title}</TextInput>
                    <View style={styles.tasks}>
                        <View style={styles.tasksInfo}>
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
                    <Animated.View style={{transform: [{rotate}]}}>
                        <CButton style={styles.openCircle} styleText={styles.openText} onPress={startAnimate} title="ᐯ"/>
                    </Animated.View>
                </View>
                <Button onPress={() => {deleteHandler(el)}} title="удалить"></Button>
            </View>
            <SubtaskList data={ListOfItems} set={setListItem}/>   
        </Animated.View>
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
        height: 75,
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
        height: 75,
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
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

    progressBar: {
        flex: 1,
        marginLeft: 10,
    },

    open: {
        width: 80,
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