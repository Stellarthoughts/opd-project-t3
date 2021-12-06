import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../common/Header';
import FormAddListItem from "../common/FormAddListItem";
import CButton from '../common/CButton';
import List from "./List";
import AsyncStorage from '@react-native-async-storage/async-storage';

function HabitsScreen({ navigation }) {
    const [ListOfItems, setListItem] = useState(async () => {
        const keys = await AsyncStorage.getAllKeys();
        let habitsArray = []
        if (keys !== null) {
            const result = await AsyncStorage.multiGet(keys);

            result.forEach(habit => habitsArray.unshift(JSON.parse(habit[1])))
        }
        setListItem(habitsArray)
    })
    const [modalVisible, setModalVisible] = useState(false);
    const addHendler = async (text) => {
        setModalVisible(false);
        if (text.length == 0) text = "Привычка"

        const key = Math.random().toString(36).substring(7)

        storeHabit(
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
                key: key
            }
        )

        const storedHabit = await AsyncStorage.getItem(key)
        setListItem((habits) => {
            return [
                JSON.parse(storedHabit),
                ...habits
            ]
        })
    }
    const onOpenModel = () => {
        setModalVisible(true);
    }

    const onCloseModal = () => {
        setModalVisible(false);
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
    const storeHabit = async (list) => {
        try {
            await AsyncStorage.setItem(list.title, JSON.stringify(list))
        } catch (error) {
            alert('Error saving occured')
        }
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
                        <FormAddListItem addHendler={addHendler} placeholder="Введите название привычки..."></FormAddListItem>

                        <CButton style={{ backgroundColor: "#e14b4b" }} styleText={{ fontSize: 16, color: "#fff" }} onPress={onCloseModal} title='Закрыть' />
                    </View>
                </View>
            </Modal>
            <List listData={ListOfItems} />
            <CButton style={styles.buttonAdd} styleText={styles.buttonAddText} onPress={onOpenModel} title='+' />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 12,
        width: "100%",
        backgroundColor: "#fff",
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