import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

function Header ({navigation}) {
    const ButtonHome = () => {
        navigation.navigate('Home');
    }

    const ButtonHolder1 = () => {
        navigation.navigate('Tasks');
    }

    const ButtonTasks = () => {
        navigation.navigate('Tasks');
    }

    const ButtonHolder2 = () => {
        navigation.navigate('Tasks');
    }

    const ButtonSettings = () => {
        navigation.navigate('Settings');
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={ButtonHome}>
                <View  style={styles.menuButton}>
                    <Text style={styles.textButton}></Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={ButtonHolder1}>
                <View style={styles.addButton}>
                    <Text style={styles.textButton}></Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={ButtonTasks}>
                <View style={styles.addButton}>
                    <Text style={styles.textButton}></Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={ButtonHolder2}>
                <View style={styles.addButton}>
                    <Text style={styles.textButton}></Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={ButtonSettings}>
                <View style={styles.addButton}>
                    <Text style={styles.textButton}></Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: '#28282c',
    },

    textTitle: {
        color: "#eee7e7",
        fontSize: 22,
    },

    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: "#8fc998",
        borderRadius: 20,
    },

    menuButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: "#c2b5b5",
        borderRadius: 2,
    },

    textButton: {
        fontSize: 22,
    }
});

export default Header;