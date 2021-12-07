import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import HabitsListItem from "./HabitsListItem";

function HabitsList ({listData}) {
    return (
        <View style={styles.container}>
            <FlatList data={listData} renderItem={({ item }) => (
                <HabitsListItem el={item} />
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