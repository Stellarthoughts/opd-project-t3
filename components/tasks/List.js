import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from "./ListItems";

function List () {
    const [ListOfItems, getListItem] = useState([
        {title: "название1", data: "11", index: 1},
        {title: "название2", data: "12", index: 2},
        {title: "название3", data: "13", index: 3},
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