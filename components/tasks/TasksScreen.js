import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView, Modal, Alert, TouchableWithoutFeedback } from 'react-native';
import List from "./List";
import Header from '../common/Header';
import CButton from '../common/CButton';
import FormAddListItem from "./FormAddListItem";
import { SafeAreaView } from 'react-native-safe-area-context';
 
function TasksScreen ({navigation}) {

    const [ListOfItems, setListItem] = useState([
        {title: "Название списка 1", completedTask: "3", countTask: "4", idCompleted: "75%", key: '1'},
        {title: "Название списка 2", completedTask: "2", countTask: "2", idCompleted: "100%", key: '2'},
        {title: "Название списка 3", completedTask: "3", countTask: "6", idCompleted: "50%", key: '3'},
        {title: "Название списка 4", completedTask: "5", countTask: "99", idCompleted: "66%", key: '4'},
        {title: "Название списка 5", completedTask: "23", countTask: "34", idCompleted: "66%", key: '5'},
        {title: "Название списка 6", completedTask: "5", countTask: "99", idCompleted: "66%", key: '6'},
        {title: "Название списка 7", completedTask: "5", countTask: "99", idCompleted: "66%", key: '7'},
        {title: "Название списка 8", completedTask: "5", countTask: "99", idCompleted: "66%", key: '8'},
    ])
    const [modalVisible, setModalVisible] = useState(false);

    const onOpenModel = () => {
        setModalVisible(true);
    }

    const onCloseModal = () => {
        setModalVisible(false);
    }

    const addHendler = (text) => {
        setListItem((list) => {
            return [
                {title: text, completedTask: "3", countTask: "4", idCompleted: "75%", key: Math.random().toString(36).substring(7)},
                ...list
            ]
        })
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
                        <FormAddListItem addHendler={addHendler}></FormAddListItem>
                        <Button color='red' onPress={onCloseModal} title='Закрыть' />
                    </View>
                </View>
            </Modal>
            <Header navigation={navigation}/>
            <List listData={ListOfItems}/>
            <CButton style={styles.buttonAdd} onPress={onOpenModel} title='+'/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        width: "100%",
        backgroundColor: '#ebebf1',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default TasksScreen;