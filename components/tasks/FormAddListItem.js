import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import ListItem from "./ListItems";

function FormAddListItem ({addHendler}) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    }

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Введите название задачи...' />
            <Button color='green' title='Добавить задачу' onPress={() => addHendler(text)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: "#000",
        padding: 10,
    }
});

export default FormAddListItem;