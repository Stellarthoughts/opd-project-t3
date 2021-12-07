import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from "./ListItem";

function List ({listData, deleteHandler}) {

    function renderItem({item})
    {
        return <ListItem el={item} deleteHandler={deleteHandler}></ListItem>
    }

    return (
        <View style={styles.container}>
            <FlatList data={listData} renderItem={(item) => renderItem(item)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        paddingBottom: 60,
    },

});

export default List;