import React, {forwardRef, useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView, Modal, Alert, TouchableWithoutFeedback } from 'react-native';
import List from "./List";
import Header from '../../common/Header';
import CButton from '../../common/CButton';
import FormAddListItem from "../../common/FormAddListItem"; 
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAStorageItem, setAStorageKey, addToAStorageKey } from '../../storage/Storage';

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
        if (text.length == 0) text = "Без названия"

        const key = Math.random().toString(36).substring(7)
        
        await addToAStorageKey(storageKey,
            {
                title: text, 
                completedTask: "0", 
                countTask: "0", 
                subtasksItem: [], 
                key: key
            }
        )

        console.log(ListOfItems);
        let tasks = await getAStorageItem(storageKey);
        setListItem(tasks);
    }

    const deleteHendler = async (key) => {
        setListItem((list) => {
            return [
                ...list.filter((_, i) => i != key)
            ]
        })

        try {
            await AsyncStorage.removeItem(key)
        } catch (err) {
            alarm("Deleting item error!")
        }
    }

    const storeTask = async (list) => {
        try {
            await AsyncStorage.setItem(list.key, JSON.stringify(list))
        } catch (error) {
            alert('Error saving occured')
        }
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
                        <Text style={styles.modalText}>Добавление новой задачи</Text>
                        <FormAddListItem addHendler={addHandler} placeholder="Введите название задачи..."></FormAddListItem>

                        <CButton style={{backgroundColor: "#e14b4b"}} styleText={{fontSize: 16, color: "#fff"}} onPress={onCloseModal} title='Закрыть'/>
                    </View>
                </View>
            </Modal>
            <Header navigation={navigation}/>
            <List listData={ListOfItems}/>
            <CButton style={styles.buttonAdd} styleText={styles.buttonAddText} onPress={onOpenModel} title='+'/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        width: "100%",
        backgroundColor: "#eee",
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