import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, Button, View, FlatList, ScrollView } from 'react-native';
import { useRef } from 'react/cjs/react.development';
import CButton from '../common/CButton';

function SubtaskList({data, set, updateHandler})
{   
    const scroll = useRef(null);

    const addSubtaskHandler = () => {
        set((list) => {
            const key = Math.random().toString(36).substring(7);
            let res = [
                ...list,
                {name: "", key: key, done: false}
            ]
            updateHandler(res);
            scroll.current.scrollToEnd({ animated: true });
            return res; 
        })
    }

    const updateItem = (key,text) =>
    {
        console.log(key);
        set((list) => {
            let ind = list.findIndex((item) => item.key == key);
            list[ind].name = text;
            updateHandler(list);
            return list;
        })
    }

    return (
        <ScrollView style={styles.subtask} 
        snapToEnd='true' ref={scroll}>
                <FlatList data={data} renderItem={({item}) => (
                    <SubtaskListItem item={item} updateItem={updateItem}/>
                )}/>
                <CButton style={{backgroundColor: "#fff"}} styleText={{fontSize: 16, color: "#999"}} 
                isShadow={false} onPress={addSubtaskHandler}
                title="+ Добавить подзадачу"/>      
        </ScrollView>
    )
}

function SubtaskListItem({item, updateItem})
{
    return (
        <View style={styles.subtaskItem}>
            <TextInput 
            style={styles.subtaskItemText} 
            onEndEditing={(event) => updateItem(item.key, event.nativeEvent.text)}
            placeholder="Новая подзадача"
            >
                {item.name}
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({

    subtask: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
    },

    subtaskItem: {
        marginBottom: 5,
    },

    subtaskItemText: {
        color: "#555",
        fontSize: 16,
    }
});

export default SubtaskList;