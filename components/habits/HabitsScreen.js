import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../common/Header';
import FormAddListItem from "../common/FormAddListItem";
import CButton from '../common/CButton';
import HabitsList from "./HabitsList";
import { getAStorageItem, setAStorageKey, addToAStorageKey, removeFromAStorageKey, replaceInAStorageKey } from '../storage/Storage';

function HabitsScreen({ navigation }) {
    
    const storageKey = 'Habits';

    const [ListOfItems, setListItem] = useState(async () => {
        let storage = await getAStorageItem(storageKey);
        setListItem(storage);
    })

    const [modalVisible, setModalVisible] = useState(false);
    const addHandler = async (text) => {
        setModalVisible(false);
        if (text.length == 0) text = "Привычка"

        const id = Math.random().toString(36).substring(7)

        await addToAStorageKey(storageKey,
            {
                title: text,
                firstDay: "false",
                secondDay: "false",
                thirdDay: "false",
                fourthDay: "false",
                fifthDay: "false",
                sixthDay: "false",
                seventhDay: "false",
                currentDay: "1",
                currentDate: new Date().getTime() / 86400000,
                hasSquare: "true",
                id: id
            }
        )

        let habits = await getAStorageItem(storageKey);
        setListItem(habits);
    }
    const onOpenModel = () => {
        setModalVisible(true);
    }

    const onCloseModal = () => {
        setModalVisible(false);
    }
    const deleteHandler = async (item) => {
        let habits = await removeFromAStorageKey(storageKey, item)
        setListItem(habits);
    }

    const updateHandler = async (replacement) => {
        let habits = await replaceInAStorageKey(storageKey, replacement);
        setListItem(habits);
    } 
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
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
                        <Text style={styles.modalText}>Добавление новой привычки</Text>
                        <FormAddListItem addHendler={addHandler} placeholder="Введите название привычки..."></FormAddListItem>

                        <CButton style={{ backgroundColor: "#e14b4b" }} styleText={{ fontSize: 16, color: "#fff" }} onPress={onCloseModal} title='Закрыть' />
                    </View>
                </View>
            </Modal>
            <HabitsList listData={ListOfItems} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
            <CButton style={styles.buttonAdd} styleText={styles.buttonAddText} onPress={onOpenModel} title='+' />
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
        transform: [{ translateX: -80 }, { translateY: -52 }],
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

export default HabitsScreen;