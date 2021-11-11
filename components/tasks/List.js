import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from "./ListItems";

function List () {
    const [ListOfItems, getListItem] = useState([
        {title: "название1", completedTask: "3", countTask: "4", idCompleted: "0", mas: [{name: "Название", id: 1}], index: 1},
        {title: "название2", completedTask: "2", countTask: "2", idCompleted: "1", mas: [{name: "Название", id: 1}], index: 2},
        {title: "название3", completedTask: "3", countTask: "6", idCompleted: "0", mas: [{name: "Название", id: 1}], index: 3},
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
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

});

export default List;