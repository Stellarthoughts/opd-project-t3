import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView, Modal, Alert, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker'
import CButton from '../../common/CButton';
import FormAddListItem from "../../common/FormAddListItem";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TimedList from './TimedList';
import {getAStorageItem, setAStorageKey, addToAStorageKey, removeFromAStorageKey, replaceInAStorageKey } from '../../storage/Storage';

const TasksTimedScreen = ({ navigation }) => {

    const storageKey = 'TasksTimed';

    const [date, setDate] = useState(new Date());
    const [modalVisible, setModalVisible] = useState(false);

    const [ListOfTimedItems, setListTimedItem] = useState(async () => {
        let storage = await getAStorageItem(storageKey);
        setListTimedItem(storage);
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

        const id = Math.random().toString(36).substring(7)

        await addToAStorageKey(storageKey,
            {
                title: text,
                completedTask: 0,
                countTask: 0,
                subtasksItem: [],
                date: date,
                id: id
            }
        )

        let tasks = await getAStorageItem(storageKey);
        setListTimedItem(tasks);
    }

    const deleteHandler = async (item) => {
        let tasks = await removeFromAStorageKey(storageKey,item)
        setListTimedItem(tasks);
    }

    const updateHandler = async (replacement) => {
        let tasks = await replaceInAStorageKey(storageKey,replacement);
        setListTimedItem(tasks);
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <Header navigation={navigation}/> */}
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
                        <Text style={styles.modalText}>Добавление новой задачи со временем</Text>
                        <DatePicker mode='date' date={date} onDateChange={setDate} minimumDate={new Date()}/>
                        <FormAddListItem addHandler={addHandler} placeholder="Введите название задачи..."/>
                        <CButton style={{backgroundColor: "#e14b4b"}} styleText={{fontSize: 16, color: "#fff"}} onPress={onCloseModal} title='Закрыть'/>
                    </View>
                </View>
            </Modal>
            <TimedList listData={ListOfTimedItems} deleteHandler={deleteHandler} updateHandler={updateHandler} />
            <CButton style={styles.buttonAdd} styleText={styles.buttonAddText} onPress={onOpenModel} title='+'/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        width: "100%",
        // backgroundColor: "#eee",
        backgroundColor: "#F9F9F9",
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        transform: [{translateX: -80}, {translateY: -52}],
        width: 70,
        height: 70,
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
