import React from 'react';
import { StyleSheet, View, FlatList, Button, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListTimedItem from './ListTimedItem';
import Images from '../../../resources';

function TimedList ({ listData, deleteHandler, updateHandler, navigation }) {

    function renderItem({item})
    {
        return <ListTimedItem el={item} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => Linking.openURL("https://tusur.ru")}
                    style={{flex: 1}}>
                    <ImageBackground
                        source={Images.tusur.logo}
                        style={styles.logo}>
                    </ImageBackground>
                </TouchableOpacity>
                <Button title='go to settings' onPress={() => navigation.navigate('Settings')} />
            </View>

            <FlatList data={listData} renderItem={(item) => renderItem(item)} scrollEnabled={false} />
        </ScrollView>
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
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
    },

    logo: {
        marginTop: 10,
        height: 23,
        width: 220
    },
});

export default TimedList;
