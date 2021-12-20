import React from 'react';
import { StyleSheet, View, FlatList, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HabitsListItem from "./HabitsListItem";
import Images from '../../resources';
import { StylesShared } from '../../resources';
import Header from '../common/Header';

function HabitsList({ listData, deleteHandler, updateHandler, navigation }) {
    return (
        <View style={styles.container} keyboardDismissMode='interactive'>
            <Header navigation={navigation}/>
            <FlatList data={listData} renderItem={({ item }) => (
                <HabitsListItem el={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />
            )} scrollEnabled={true} ListFooterComponent={<View style={{height: 100}}/>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },

    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 8,
        marginLeft: 16,
        marginRight: 25,
        marginBottom: 3,
    },

    logo: {
        marginTop: 8,
        height: 23,
        width: 220
    },

    settingsButton: {
        marginTop: 2,
        width: 35,
        height: 35
    }
});

export default HabitsList;