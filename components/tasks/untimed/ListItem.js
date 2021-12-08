import React, {useState, useRef} from 'react';
import { StyleSheet, View, FlatList, Text, Image, Animated, TextInput, CheckBox, Button, ScrollView } from 'react-native';
import ProgressBar from '../ProgressBar';
import Images from '../../../resources';
import CButton from '../../common/CButton';
import SubtaskList from '../SubtaskList';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


function ListItem({ el, deleteHandler, updateHandler }) {
    const [ListOfItems, setListItem] = useState(el.subtasksItem)
    var isOpenDropMenu = false
    const scroll = useRef(null);

    // Анимация
    const animate_state = {
        start: 0,
        end: 1,
    }
    const value = useRef(new Animated.Value(animate_state.start)).current;
    const inputRange = Object.values(animate_state);
    let height = value.interpolate({ inputRange, outputRange: [71, 280] });
    const rotate = value.interpolate({ inputRange, outputRange: ["0deg", "180deg"] });

    const startAnimate = (event) => {
        if (isOpenDropMenu) {
            Animated.timing(value, {toValue: animate_state.start, useNativeDriver: false, duration: 500}).start();
        }
        else {
            Animated.timing(value, {toValue: animate_state.end, useNativeDriver: false, duration: 500}).start();
        }
        isOpenDropMenu = !isOpenDropMenu;
    }
    
    // Анимация удаления
    const animate_deletion_state = {
        start: 0,
        end: 1,
    }
    const deletionValue = useRef(new Animated.Value(animate_deletion_state.start)).current;
    const posOffset = deletionValue.interpolate({ inputRange, outputRange: [15, 1000] });

    const startAnimateDeletion = (event) => {
        Animated.timing(deletionValue, {toValue: animate_deletion_state.end, useNativeDriver: false, duration: 250}).start(() => deleteHandler(el));
    }

    // Update el
    function updateTitle(text) {
        el.title = text;
        updateHandler(el);
    }

    function updateSubtasks(array,doScroll) {
        el.subtasksItem = array;

        el.countTask = el.subtasksItem.length;
        let i = 0;
        el.subtasksItem.forEach((item) => {if(item.done) i++;});
        el.completedTask = i;

        setCompletedTask(el.completedTask);
        setCountTask(el.countTask);

        if(doScroll) 
        {
            scroll.current.scrollToEnd({ animated: true });
        }

        updateHandler(el);
    }

    const [completedTask, setCompletedTask]  = useState(el.completedTask);
    const [countTask, setCountTask]  = useState(el.countTask);

    // Вывод элемента
    return (
        <Animated.View style={[styles.container, {height: height, marginLeft: posOffset}]}>
            <GestureRecognizer
                onSwipeRight={startAnimateDeletion}
            >
                <View style={styles.task}>
                    <View style={styles.icon}>
                        <Image style={styles.openFolder} source={Images.tasks.openFolder}/>
                    </View>
                    <View style={styles.info}>
                        <TextInput placeholder="Новая задача" 
                        style={styles.title} 
                        onEndEditing={(event) => updateTitle(event.nativeEvent.text)}>
                            {el.title}
                        </TextInput>
                        <View style={styles.tasks}>
                            <View style={styles.tasksInfo}>
                                <Text style={styles.countTasks}>{completedTask}</Text>
                                <Text style={styles.countTasks}>/</Text>
                                <Text style={styles.countTasks}>{countTask}</Text>
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
                </View>
            </GestureRecognizer>
            <ScrollView style={styles.subtask} 
            snapToEnd='true' ref={scroll}>
                <SubtaskList data={ListOfItems} set={setListItem} updateHandler={updateSubtasks}/>   
            </ScrollView>
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