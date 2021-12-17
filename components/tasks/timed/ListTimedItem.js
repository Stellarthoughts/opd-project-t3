import React, {useState, useRef} from 'react';
import { StyleSheet, View, Text, Image, Animated, TextInput, CheckBox, Button, ScrollView } from 'react-native';
import ProgressBar from '../ProgressBar';
import Images from '../../../resources';
import CButton from '../../common/CButton';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import SubtaskList from '../SubtaskList';
import DateBlock from './DateBlock';

function ListTimedItem({ el, deleteHandler, updateHandler, onExpiredDate }) {
    const [ListOfItems, setListItem] = useState(el.subtasksItem);
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

    // console.log(pickedDate);
    // console.log(hadDateExpired());
    // Вывод элемента
    return (
        <Animated.View style={[styles.container, { marginLeft: posOffset }]}>
            <GestureRecognizer
                onSwipeRight={startAnimateDeletion}
            >
                <View style={styles.task}>
                    <DateBlock date={el.date} expiredDate={el.expiredDate}/>
                    {/*<DateBlock date={el.date} />*/}
                    <View style={styles.info}>
                        <TextInput placeholder="Новая задача"
                        style={styles.title}
                        onEndEditing={(event) => updateTitle(event.nativeEvent.text)}>
                            {el.title}
                        </TextInput>
                        <ScrollView style={styles.subtask}
                                    snapToEnd='true' ref={scroll}>
                            <SubtaskList data={ListOfItems} set={setListItem} updateHandler={updateSubtasks}
                                         styles={subtaskTimedStyles} />
                        </ScrollView>
                    </View>
                </View>
            </GestureRecognizer>
        </Animated.View>
    );
}

const subtaskTimedStyles = StyleSheet.create({

    subtaskItem: {
        flexDirection: "row",
    },

    checkbox: {
        paddingVertical: 3,
    },

    subtaskItemText: {
        color: "#555",
        fontSize: 16,
    },

    subtaskButtonBg: {
        backgroundColor: "#E9E9E9",
        alignItems: "flex-start",
    },
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F9F9',
        marginTop: 25,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 8,
        height: 240,
    },

    task: {
        height: 240,
        flexDirection: "column",
    },

    subtask: {
        marginTop: 10,
        marginRight: 15,
        marginBottom: 10,
    },

    info: {
        flex: 1,
        backgroundColor: "#E9E9E9",
        height: "auto",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        padding: 10,
        marginTop: 13,
        height: 80,
        borderRadius: 20,
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

    tasksInfo: {
        flexDirection: "row",
    },

});

export default ListTimedItem;
