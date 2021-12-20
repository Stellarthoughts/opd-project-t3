import React from 'react';
import { StyleSheet, View, FlatList, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HabitsListItem from "./HabitsListItem";
import Images from '../../resources';
import { StylesShared } from '../../resources';

function HabitsList({ listData, deleteHandler, updateHandler, navigation }) {
    return (
        <View style={styles.container} keyboardDismissMode='interactive'>
            <View style={StylesShared.header}>
                <TouchableOpacity
                    onPress={() => Linking.openURL("https://tusur.ru")}
                    style={{flex: 1}}>
                    <ImageBackground
                        source={Images.tusur.logo}
                        style={StylesShared.logo}>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}
                >
                    <ImageBackground
                        source={Images.settings.button}
                        style={StylesShared.settingsButton}>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <FlatList data={listData} renderItem={({ item }) => (
                <HabitsListItem el={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />
            )} scrollEnabled={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingBottom: 60,
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