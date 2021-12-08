import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import HabitsListItem from "./HabitsListItem";

function HabitsList({ listData, deleteHandler, updateHandler}) {
    return (
        <View style={styles.container}>
            <FlatList data={listData} renderItem={({ item }) => (
                <HabitsListItem el={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />
            )}/>
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

export default HabitsList;