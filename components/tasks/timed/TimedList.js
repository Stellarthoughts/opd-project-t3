import React from 'react';
import { StyleSheet, View, FlatList, Button, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListTimedItem from './ListTimedItem';
import Images from '../../../resources';
import { StylesShared } from '../../../resources';
import Header from '../../common/Header';

function TimedList ({ listData, deleteHandler, updateHandler, navigation }) {

    function renderItem({item})
    {
        return <ListTimedItem el={item} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <FlatList data={listData} renderItem={(item) => renderItem(item)} scrollEnabled={true} 
            ListFooterComponent={<View style={{height: 100}}/>}/>
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
    },

    settingsButton: {
        marginTop: 2,
        width: 35,
        height: 35
    }
});

export default TimedList;
