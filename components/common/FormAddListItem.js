import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import CButton from './CButton';

function FormAddListItem ({addHandler: addHandler, placeholder}) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={onChange} placeholder={placeholder} placeholderTextColor={'grey'} returnKeyType='done' />
            <CButton style={{backgroundColor: "#1870CD"}} styleText={{fontSize: 16, color: "#fff"}} onPress={() => addHandler(text)} title='Добавить задачу'/>
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
        borderColor: "#666",
        padding: 10,
        marginBottom: 20,
    }
});

export default FormAddListItem;