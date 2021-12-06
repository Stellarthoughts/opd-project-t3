import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, Button, View, FlatList } from 'react-native';
import CButton from '../common/CButton';

function SubtaskList({data, set})
{
    const [getCurrentKey, setCurrentKey] = useState(0);
    const addSubtaskHandler = () => {
        set((list) => {
            const key = getCurrentKey;
            setCurrentKey(key + 1);
            console.debug(key);
            return [
                {name: "Новая подзадача", key: key},
                ...list
            ]
        })
    }

    return (
        <View style={styles.subtask}>
                <FlatList data={data} renderItem={({ item }) => (
                    <View style={styles.subtaskItem}>
                        <TextInput style={styles.subtaskItemText}>{item.name}</TextInput>
                    </View>
                )}/>
                <CButton style={{backgroundColor: "#fff"}} styleText={{fontSize: 16, color: "#999"}} isShadow={false} 
                onPress={addSubtaskHandler} 
                title="+ Добавить строку"/>
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