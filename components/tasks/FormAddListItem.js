import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import ListItem from "./ListItems";

function FormAddListItem ({addHendler}) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Введите название задачи...' />
            <Button color='green' title='Добавить задачу' onPress={() => addHendler(text)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
    },

    input: {
        borderBottomWidth: 1,
        borderColor: "#000",
        padding: 10,
        marginBottom: 20,
    }
});

export default FormAddListItem;