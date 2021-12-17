import React, {forwardRef, useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView, Modal, Alert, TouchableWithoutFeedback } from 'react-native';
import List from "./List";
import Header from '../../common/Header';
import CButton from '../../common/CButton';
import FormAddListItem from "../../common/FormAddListItem";
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAStorageItem, setAStorageKey, addToAStorageKey, removeFromAStorageKey, replaceInAStorageKey } from '../../storage/Storage';

const TasksScreen = ({navigation}) => {

    const storageKey = 'Tasks';

    const [ListOfItems, setListItem] = useState(async () => {
        let storage = await getAStorageItem(storageKey);
        setListItem(storage);
    })

    const [modalVisible, setModalVisible] = useState(false);

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
                id: id
            }
        )

        let tasks = await getAStorageItem(storageKey);
        setListItem(tasks);
    }

    const deleteHandler = async (item) => {
        let tasks = await removeFromAStorageKey(storageKey,item)
        setListItem(tasks);
    }

    const updateHandler = async (replacement) => {
        let tasks = await replaceInAStorageKey(storageKey,replacement);
        setListItem(tasks);
    }

    return (
        <SafeAreaView style={styles.container} >
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
                        <Text style={styles.modalText}>Добавление новой задачи</Text>
                        <FormAddListItem addHandler={addHandler} placeholder="Введите название задачи..."></FormAddListItem>
                        <CButton style={{backgroundColor: "#e14b4b"}} styleText={{fontSize: 16, color: "#fff"}} onPress={onCloseModal} title='Закрыть'/>
                    </View>
                </View>
            </Modal>
            <List listData={ListOfItems} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
            <CButton style={styles.buttonAdd} styleText={styles.buttonAddText} onPress={onOpenModel} title='+'/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#ebebeb",
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 0,
        marginBottom: Platform.OS === 'ios' ? -30 : 0,
        height: "100%",
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
        transform: Platform.OS === 'ios' ? [{translateX: -80}, {translateY: -110}] : [{translateX: -80}, {translateY: -60}],
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
        padding: 35,
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
    }
});

export default TasksScreen;
