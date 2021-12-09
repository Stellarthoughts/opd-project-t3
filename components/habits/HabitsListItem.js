import React, { useState, useRef } from 'react';
import { StyleSheet, View, FlatList, Text, Image, Animated, TextInput, Modal } from 'react-native';
import { CheckBox } from 'react-native-elements';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

function HabitsListItem({ el, deleteHandler, updateHandler }) {
    // Вывод элемента
    var curDay = Math.floor(Math.abs(el.currentDate - parseInt(new Date().getTime()) / 86400000)) + 1;
    var day = Math.abs(curDay - el.finalDay - 1)
    if (day < 0)
        day = 0
    if (curDay != el.currentDay && curDay % 7 < 7 && curDay > 0 && day != 0) {
        el.hasSquare = true;
        el.currentDay = curDay;
        updateHandler(el);
    }
    var isFlagged = false
    if (day == 0) {
        el.hasSquare = false;
        isFlagged = true;
        updateHandler(el);
    }
    if (curDay % 7 == 1 && curDay > 1) {
        el.firstDay = false;
        el.secondDay = false;
        el.thirdDay = false;
        el.fourthDay = false;
        el.fifthDay = false;
        el.sixthDay = false;
        el.seventhDay = false;
        updateHandler(el);
    }
    const [modalVisible, setModalVisible] = useState(!el.hasSquare);
    const [firstColor, setFirstColor] = useState(!el.firstDay);
    const [secondColor, setSecondColor] = useState(!el.secondDay);
    const [thirdColor, setThirdColor] = useState(!el.thirdDay);
    const [fourthColor, setFourthColor] = useState(!el.fourthDay);
    const [fifthColor, setFifthColor] = useState(!el.fifthDay);
    const [sixthColor, setSixthColor] = useState(!el.sixthDay);
    const [seventhColor, setSeventhColor] = useState(!el.seventhDay);
    var isColoredFirst = !el.firstDay
    var isColoredSecond = !el.secondDay
    var isColoredThird = !el.thirdDay
    var isColoredFourth = !el.fourthDay
    var isColoredFifth = !el.fifthDay
    var isColoredSixth = !el.sixthDay
    var isColoredSeventh = !el.seventhDay
    var dayOffset
    var textOffset
    if (day % 10 >= 5)
        dayOffset = "дней"
    else if (day % 10 == 0)
        dayOffset = "дней"
    else if (day % 10 > 0 && day % 10 < 5 && day < 11
        || day % 10 > 0 && day % 10 < 5 && day > 14)
        dayOffset = "день"
    else if (day > 10 && day < 15)
        dayOffset = "дней"
    if (day % 10 == 1 && day < 11 || day % 10 == 1 && day > 20)
        textOffset = "остался"
    else
        textOffset = "осталось"
    const flag = (event) => {
        if (curDay == 1) {
            isColoredFirst = !isColoredFirst;
            setFirstColor(isColoredFirst);
            el.firstDay = !isColoredFirst;
        }
        else if (curDay == 2) {
            isColoredSecond = !isColoredSecond;
            setSecondColor(isColoredSecond);
            el.secondDay = !isColoredSecond;
        }
        else if (curDay == 3) {
            isColoredThird = !isColoredThird;
            setThirdColor(isColoredThird);
            el.thirdDay = !isColoredThird;
        }
        else if (curDay == 4) {
            isColoredFourth = !isColoredFourth;
            setFourthColor(isColoredFourth);
            el.fourthDay = !isColoredFourth;
        }
        else if (curDay == 5) {
            isColoredFifth = !isColoredFifth;
            setFifthColor(isColoredFifth);
            el.fifthDay = !isColoredFifth;
        }
        else if (curDay == 6) {
            isColoredSixth = !isColoredSixth;
            setSixthColor(isColoredSixth);
            el.sixthDay = !isColoredSixth;
        }
        else if (curDay == 7) {
            isColoredSeventh = !isColoredSeventh;
            setSeventhColor(isColoredSeventh);
            el.seventhDay = !isColoredSeventh;
        }
        isFlagged = !isFlagged;
        setModalVisible(!modalVisible);
        el.hasSquare = !isFlagged;
        updateHandler(el);
    }
    // Анимация удаления
    const animate_state = {
        start: 0,
        end: 1,
    }
    const inputRange = Object.values(animate_state);
    const animate_deletion_state = {
        start: 0,
        end: 1,
    }
    const deletionValue = useRef(new Animated.Value(animate_deletion_state.start)).current;
    const posOffset = deletionValue.interpolate({ inputRange, outputRange: [0, 1000] });
    const startAnimateDeletion = (event) => {
        Animated.timing(deletionValue, { toValue: animate_deletion_state.end, useNativeDriver: false, duration: 250 }).start(() => deleteHandler(el));
    }
    function updateTitle(text) {
        el.title = text;
        updateHandler(el);
    }
    return (
        <Animated.View style={[styles.empty, { marginLeft: posOffset }]}>
        <GestureRecognizer
            onSwipeRight={startAnimateDeletion}
            >
            <View style={styles.container}>
            <View style={styles.info}>
                <TextInput style={styles.title} onEndEditing={(event) => updateTitle(event.nativeEvent.text)}>{el.title}</TextInput>
                <View style={styles.circles}>
                    <View style={styles.open}>
                        <View style={!firstColor ? styles.openCircle : styles.closeCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={!secondColor ? styles.openCircle : styles.closeCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={!thirdColor ? styles.openCircle : styles.closeCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={!fourthColor ? styles.openCircle : styles.closeCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={!fifthColor ? styles.openCircle : styles.closeCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={!sixthColor ? styles.openCircle : styles.closeCircle} />
                    </View>
                    <View style={styles.open}>
                        <View style={!seventhColor ? styles.openCircle : styles.closeCircle} />
                    </View>
                    <View style={styles.opSquare}>
                        <CheckBox
                            checked={modalVisible}
                            style={styles.checkbox}
                            size={35}
                            uncheckedColor="#565656"
                            checkedColor="black"
                            onPress={flag}
                        />
                    </View>
                </View>
                <Text style={styles.text}>{curDay} день, {textOffset} {day} {dayOffset}</Text>
                </View>
            </View>
            </GestureRecognizer>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    empty: {
        width: "100%",
    },
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 8,
        overflow: "hidden",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        paddingBottom: 5,
    },

    info: {
        flex: 1,
        height: "auto",
        padding: 10,
    },

    title: {
        color: "#444",
        fontSize: 25,
        paddingLeft: 8,
        fontWeight: "bold",
    },

    circles: {
        paddingLeft: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    open: {
        justifyContent: "center",
        alignItems: "center",
    },

    openCircle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        width: 25,
        height: 25,
        borderRadius: 50,
    },

    closeCircle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        borderWidth: 2,
        borderColor: "black",
        width: 25,
        height: 25,
        borderRadius: 50,
    },

    opSquare: {
        marginLeft: 15,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 0,
    },

    openSquare: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 0,
        borderColor: "#565656",
        width: 27,
        height: 27,
    },
    closeSquare: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 0,
        borderColor: "white",
        width: 27,
        height: 27,
    },
    checkbox: {
    },
    text: {
        color: "#444",
        fontSize: 15,
        paddingLeft: 15,
    },
});

export default HabitsListItem;