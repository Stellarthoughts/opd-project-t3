import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from "./ListItems";

function List () {
    const [ListOfItems, getListItem] = useState([
        {title: "Название списка", completedTask: "3", countTask: "4", idCompleted: "0", mas: [{name: "Название", id: 1}], index: 1},
        {title: "Название списка", completedTask: "2", countTask: "2", idCompleted: "1", mas: [{name: "Название", id: 1}], index: 2},
        {title: "Название списка", completedTask: "3", countTask: "6", idCompleted: "0", mas: [{name: "Название", id: 1}], index: 3},
    ])

    return (
        <View style={styles.container}>
            <FlatList data={ListOfItems} renderItem={({ item }) => (
                <ListItem el={item} />
            )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

});

export default List;