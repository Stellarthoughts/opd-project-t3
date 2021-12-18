import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, View, FlatList, Text, Image, Animated, TextInput, CheckBox, Button, ScrollView } from 'react-native';
import CButton from '../../common/CButton';
import SubtaskList from '../SubtaskList';

function WeekItem({ el, updateHandler }) {
    const [listSubtask, setListSubtask] = useState(el.subtasksItem);

    // Обновление
    const Update = (data) => {
        setListSubtask((list) => data);
    }

    // Форматирование вывода
    const formatDateWeek = () => {
        var date = el.date.getDate();
        var month = el.date.getMonth() + 1;
        if (date < 10) date = "0" + date;
        if (month < 10) month = "0" + month;
        return el.shortName + " " + date + "." + month;
    }

    function updateSubtasks(array) {
        el.subtasksItem = array;
        updateHandler(el);
    }

    // Вывод элемента
    return (
        <View style={styles.container}>
            <Text  style={styles.title}>{formatDateWeek()}</Text>
            <SubtaskList styles={subtaskStyles} data={listSubtask} set={setListSubtask} updateHandler={updateSubtasks}></SubtaskList>
        </View>
    );
}

const subtaskStyles = StyleSheet.create({

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
        backgroundColor: "#fff"
    },
});

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15
    },

    title: {
        color: "#0AB09C",
        fontSize: 16,
        marginBottom: 10
    }
});

export default WeekItem;