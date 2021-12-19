import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

function CButton ({style, styleText, onPress, title, isShadow = true}) {
    if (isShadow) {
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={[styles.buttonShodow, style]}>
                    <Text style={[styles.title, styleText]}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
    else
    {
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={[styles.button, style, {}]}>
                    <Text style={[styles.title, styleText]}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    buttonShodow: {
        backgroundColor: "#565656",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
    },

    button: {
        backgroundColor: "#565656",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        color: "#fff",
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 38,
        textAlign: "center",
    },
});

export default CButton;
