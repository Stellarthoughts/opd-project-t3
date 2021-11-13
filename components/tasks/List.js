import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from "./ListItems";
import FormAddListItem from "./FormAddListItem";

function List () {
    const [ListOfItems, setListItem] = useState([
        {title: "Название списка", completedTask: "3", countTask: "4", idCompleted: "75%", key: '1'},
        {title: "Название списка", completedTask: "2", countTask: "2", idCompleted: "100%", key: '2'},
        {title: "Название списка", completedTask: "3", countTask: "6", idCompleted: "50%", key: '3'},
    ])

    const addHendler = (text) => {
        setListItem((list) => {
            return [
                {title: text, completedTask: "3", countTask: "4", idCompleted: "75%", key: Math.random().toString(36).substring(7)},
                ...list
            ]
        })
    }

    return (
        <View style={styles.container}>
            <FormAddListItem addHendler={addHendler}></FormAddListItem>
            <FlatList data={ListOfItems} renderItem={({ item }) => (
                <ListItem el={item} />
            )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        backgroundColor: "#EEE",
    },

});

export default List;