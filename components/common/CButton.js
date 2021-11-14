import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

function CButton ({onPress, title}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        top: "100%",
        left: "100%",
        transform: [{ translateX: -80 }, { translateY: -52 }],
        backgroundColor: "#565656",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        color: "#C9EDEC",
        fontSize: 40,
    },
});

export default CButton;