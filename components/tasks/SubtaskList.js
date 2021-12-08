import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, Button, View, FlatList } from 'react-native';
import { useRef } from 'react/cjs/react.development';
import CButton from '../common/CButton';
import { CheckBox } from 'react-native-elements';

function SubtaskList({data, set, updateHandler})
{   
    const addSubtaskHandler = () => {
        set((list) => {
            const key = Math.random().toString(36).substring(7);
            let res = [
                ...list,
                {name: "", key: key, done: false}
            ]
            updateHandler(res, true);
            return res; 
        })
    }

    const updateItemText = (key,text) =>
    {
        set((list) => {
            let ind = list.findIndex((item) => item.key == key);
            list[ind].name = text;
            updateHandler(list, false);
            return list;
        })
    }

    const updateItemDone = (key,flag) =>
    {
        set((list) => {
            let ind = list.findIndex((item) => item.key == key);
            list[ind].done = flag;
            updateHandler(list, false);
            return list;
        })
    }

    return (
        <View>
            <FlatList data={data} renderItem={({item}) => (
                <SubtaskListItem item={item} updateItemText={updateItemText} updateItemDone={updateItemDone}/>
            )}/>
            <CButton style={{backgroundColor: "#fff"}} styleText={{fontSize: 16, color: "#999"}} 
            isShadow={false} onPress={addSubtaskHandler}
            title="+ Добавить подзадачу"/>   
        </View>   
    )
}

function SubtaskListItem({item, updateItemText, updateItemDone})
{
    const [checked, setChecked] = useState(item.done);

    const changeState = (event) =>
    {
        setChecked(!checked);
        updateItemDone(item.key, !checked);
    }

    return (
        <View style={styles.subtaskItem}>
            <CheckBox
            checked={checked}
            style={styles.checkbox}
            size={25}
            uncheckedColor="#565656"
            checkedColor="black"
            onPress={changeState}
            />
            <TextInput 
            style={styles.subtaskItemText} 
            onEndEditing={(event) => updateItemText(item.key, event.nativeEvent.text)}
            placeholder="Новая подзадача"
            >
                {item.name}
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({

    checkbox: {

    },

    subtask: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
    },

    subtaskItem: {
        flexDirection: "row",
        marginBottom: 5,
    },

    button: {
        marginRight: 10,
    },

    subtaskItemText: {
        color: "#555",
        fontSize: 16,
    }
});

export default SubtaskList;