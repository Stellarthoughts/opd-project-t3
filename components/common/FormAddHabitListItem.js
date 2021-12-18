import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import CButton from './CButton';

function FormAddHabitListItem ({addHandler: addHandler, placeholder, dayPlaceholder}) {
    const [text, setValue] = useState('');
    const [day, setDay] = useState('3');

    const onChange = (text) => {
        setValue(text);
    }
    const onChangeDay = (day) => {
        setDay(day);
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={onChange} placeholder={placeholder} placeholderTextColor={'grey'} />
            <Text style={styles.text}>Количество недель</Text>
            <TextInput style={styles.input} keyboardType='numeric' onChangeText={onChangeDay} placeholder={dayPlaceholder} placeholderTextColor={'grey'} />
            <CButton style={{backgroundColor: "#57c79e"}} styleText={{fontSize: 16, color: "#fff"}} onPress={() => addHandler(text, day)} title='Добавить привычку'/>
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
    },
    text: {
        marginTop: 20,
        textAlign: 'center',
        marginBottom: -10
    }
});

export default FormAddHabitListItem;