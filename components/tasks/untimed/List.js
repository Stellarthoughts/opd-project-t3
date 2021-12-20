import React from 'react';
import { StyleSheet, View, FlatList, ImageBackground, TouchableOpacity, Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from "./ListItem";
import Images from '../../../resources';
import { StylesShared } from '../../../resources';
import Header from '../../common/Header';

function List ({listData, deleteHandler, updateHandler, navigation}) {

    function renderItem({item})
    {
        return <ListItem el={item} deleteHandler={deleteHandler} updateHandler={updateHandler}></ListItem>
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <FlatList style={{marginTop: 10}} data={listData} renderItem={(item) => renderItem(item)} scrollEnabled={true}/>
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
});

export default List;
