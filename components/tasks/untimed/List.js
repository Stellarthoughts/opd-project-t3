import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from "./ListItem";

function List ({listData, deleteHandler, updateHandler}) {

    function renderItem({item})
    {
        return <ListItem el={item} deleteHandler={deleteHandler} updateHandler={updateHandler}></ListItem>
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
        height: "100%",
    },

});

export default List;
