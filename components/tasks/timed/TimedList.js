import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListTimedItem from './ListTimedItem'

function TimedList ({ listData, deleteHandler, updateHandler }) {

    function renderItem({item})
    {
        return <ListTimedItem el={item} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
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

export default TimedList;
