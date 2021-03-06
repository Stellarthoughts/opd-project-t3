import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormAddHabitListItem from "../common/FormAddHabitListItem";
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
    const addHandler = async (text, day) => {
        setModalVisible(false);
        var Day
        if (text.length == 0) text = "Привычка"
        if (day.length == 0) Day = 21
        if (parseInt(day) < 1)
            Day = 21
        else
            Day = parseInt(day) * 7

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
                daysCounter: 0,
                finalDay: Day,
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
                        <FormAddHabitListItem addHandler={addHandler} placeholder="Введите название привычки..." dayPlaceholder="3"></FormAddHabitListItem>
                        <CButton style={{ backgroundColor: "#565656" }} styleText={{ fontSize: 16, color: "#fff" }} onPress={onCloseModal} title='Закрыть' />
                    </View>
                </View>
            </Modal>
            <HabitsList listData={ListOfItems} deleteHandler={deleteHandler} updateHandler={updateHandler} navigation={navigation} />
            <CButton style={styles.buttonAdd} styleText={styles.buttonAddText} onPress={onOpenModel} title='+' />
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
        transform: Platform.OS === 'ios' ? [{translateX: -80}, {translateY: -80}] : [{translateX: -80}, {translateY: -60}],
        width: 65,
        height: 65,
    },

    buttonAddText: {
        color: "#C9EDEC",
        fontSize: 40,
        fontWeight: "normal",
        marginTop: 0,
        marginBottom: 4,
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