import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker'
import CButton from '../../common/CButton';
import FormAddListItem from "../../common/FormAddListItem";
import TimedList from './TimedList';
import {getAStorageItem, setAStorageKey, addToAStorageKey, removeFromAStorageKey, replaceInAStorageKey } from '../../storage/Storage';

function compareDates(a, b) {
    if (a.date === b.date)
        return 0;

    return a.date < b.date ? -1 : 1;
}

const TasksTimedScreen = ({ navigation }) => {

    const storageKey = 'TasksTimed';

    const [date, setDate] = useState(new Date());
    const [modalVisible, setModalVisible] = useState(false);

    const [ListOfTimedItems, setListTimedItem] = useState(async () => {
        let storage = await getAStorageItem(storageKey);
        const sortedTasks = storage.sort(compareDates);
        const todaysDate = new Date();

        sortedTasks.forEach((task) => {
            const taskDate = new Date(task.date);
            if(taskDate < todaysDate) {
                task.expiredDate = true;
            }
        });

        setListTimedItem(sortedTasks);
    })

    const onOpenModel = () => {
        setModalVisible(true);
    }

    const onCloseModal = () => {
        setModalVisible(false);
    }

    const addHandler = async (text) => {
        setModalVisible(false);
        if (text.length == 0) text = ""

        const id = Math.random().toString(36).substring(7);
        const taskDate = new Date(date);
        const todaysDate = new Date();

        await addToAStorageKey(storageKey,
            {
                title: text,
                completedTask: 0,
                countTask: 0,
                subtasksItem: [],
                date: date,
                id: id,
                expiredDate: taskDate < todaysDate ? true : false,
            }
        )

        let tasks = await getAStorageItem(storageKey);
        const sortedTasks = tasks.sort(compareDates);

        setListTimedItem(sortedTasks);
    }

    const deleteHandler = async (item) => {
        let tasks = await removeFromAStorageKey(storageKey,item);

        const sortedTasks = tasks.sort(compareDates);
        setListTimedItem(sortedTasks);
    }

    const updateHandler = async (replacement) => {
        let tasks = await replaceInAStorageKey(storageKey,replacement);

        const sortedTasks = tasks.sort(compareDates);
        setListTimedItem(sortedTasks);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Добавление новой задачи с дедлайном</Text>
                        {/*<DatePicker mode='date' date={date} onDateChange={setDate} />*/}
                        <FormAddListItem addHandler={addHandler} placeholder="Введите название задачи..."/>
                        <CButton style={{backgroundColor: "#565656"}} styleText={{fontSize: 16, color: "#fff"}}
                                 onPress={onCloseModal} title='Закрыть'/>
                    </View>
                </View>
            </Modal>
            <TimedList listData={ListOfTimedItems} deleteHandler={deleteHandler} updateHandler={updateHandler} navigation={navigation} />
            <CButton style={styles.buttonAdd} styleText={styles.buttonAddText} onPress={onOpenModel} title='+'/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        width: "100%",
        backgroundColor: "#F3F3F3",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: Platform.OS === 'ios' ? -25 : 0,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    buttonAdd: {
        position: "absolute",
        top: "100%",
        left: "100%",
        transform: Platform.OS === 'ios' ? [{translateX: -80}, {translateY: -105}] : [{translateX: -80}, {translateY: -60}],
        width: 65,
        height: 65,
    },

    buttonAddText: {
        color: "#C9EDEC",
        fontSize: 40,
        fontWeight: "normal",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 26,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    modalText: {
        color: "#666",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center'
    }

});

export default TasksTimedScreen;
