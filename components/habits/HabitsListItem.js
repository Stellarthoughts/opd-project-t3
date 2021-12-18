import React, { useState, useRef } from 'react';
import { StyleSheet, View, FlatList, Text, Image, Animated, TextInput, Modal } from 'react-native';
import { CheckBox } from 'react-native-elements';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

function HabitsListItem({ el, deleteHandler, updateHandler }) {
    // Вывод элемента
    var curDay = Math.floor(Math.abs(el.currentDate - parseInt(new Date().getTime()) / 86400000)) + 1;
    var day = -curDay + el.finalDay + 1
    if (day < 0)
        day = 0
    if (curDay != el.currentDay && curDay > 0 && day != 0) {
        el.hasSquare = true;
        el.currentDay = curDay;
        updateHandler(el);
    }
    var canWork = true
    if (day == 0) {
        curDay = el.finalDay;
        canWork = false;
        changeDays(false);
    }
    if (curDay % 7 == 1 && curDay > 1 && day != 0 && el.hasSquare) {
        if (!el.firstDay || !el.secondDay || !el.thirdDay || !el.fourthDay || !el.fifthDay || !el.sixthDay || !el.seventhDay) {
            changeDays(true);
            updateHandler(el);
        }
    }
    else if (curDay % 7 == 2 && curDay > 1 && day != 0 && el.hasSquare) {
        if (!el.secondDay || !el.thirdDay || !el.fourthDay || !el.fifthDay || !el.sixthDay || !el.seventhDay) {
            changeDays(true);
            updateHandler(el);
        }
    }
    else if (curDay % 7 == 3 && curDay > 1 && day != 0 && el.hasSquare) {
        if (!el.thirdDay || !el.fourthDay || !el.fifthDay || !el.sixthDay || !el.seventhDay) {
            changeDays(true);
            updateHandler(el);
        }
    }
    else if (curDay % 7 == 4 && curDay > 1 && day != 0 && el.hasSquare) {
        if (!el.fourthDay || !el.fifthDay || !el.sixthDay || !el.seventhDay) {
            changeDays(true);
            updateHandler(el);
        }
    }
    else if (curDay % 7 == 5 && curDay > 1 && day != 0 && el.hasSquare) {
        if (!el.fifthDay || !el.sixthDay || !el.seventhDay) {
            changeDays(true);
            updateHandler(el);
        }
    }
    else if (curDay % 7 == 6 && curDay > 1 && day != 0 && el.hasSquare) {
        if (!el.sixthDay || !el.seventhDay) {
            changeDays(true);
            updateHandler(el);
        }
    }
    else if (curDay % 7 == 0 && curDay > 1 && day != 0 && el.hasSquare) {
        if (!el.seventhDay) {
            changeDays(true);
            updateHandler(el);
        }
    }
    const [modalVisible, setModalVisible] = useState(!el.hasSquare);
    const [firstColor, setFirstColor] = useState(!el.firstDay);
    const [secondColor, setSecondColor] = useState(!el.secondDay);
    const [thirdColor, setThirdColor] = useState(!el.thirdDay);
    const [fourthColor, setFourthColor] = useState(!el.fourthDay);
    const [fifthColor, setFifthColor] = useState(!el.fifthDay);
    const [sixthColor, setSixthColor] = useState(!el.sixthDay);
    const [seventhColor, setSeventhColor] = useState(!el.seventhDay);
    var dayOffset
    var textOffset
    var finalText
    var Ratio = el.daysCounter / curDay;
    if (Ratio > 0.9)
        finalText = "Привычка освоена";
    else if (Ratio > 0.7 && Ratio <= 0.9)
        finalText = "Привычка частично не освоена";
    else if (Ratio > 0.45 && Ratio <= 0.7)
        finalText = "Привычка почти не освоена";
    else if (Ratio <= 0.45)
        finalText = "Привычка не освоена";
    if (day % 10 >= 5)
        dayOffset = "дней"
    else if (day % 10 == 0)
        dayOffset = "дней"
    else if (day % 10 > 0 && day % 10 < 2 && day < 11
        || day % 10 > 0 && day % 10 < 2 && day > 14)
        dayOffset = "день"
    else if (day % 10 > 1 && day % 10 < 5 && day < 11
        || day % 10 > 1 && day % 10 < 5 && day > 14)
        dayOffset = "дня"
    else if (day > 10 && day < 15)
        dayOffset = "дней"
    if (day % 10 == 1 && day < 11 || day % 10 == 1 && day > 20)
        textOffset = "остался"
    else
        textOffset = "осталось"
    const flag = (event) => {
        switch (curDay % 7) {
            case 1:
                updateDayFlag(1, !firstColor);
                break;
            case 2:
                updateDayFlag(2, !secondColor);
                break;
            case 3:
                updateDayFlag(3, !thirdColor);
                break;
            case 4:
                updateDayFlag(4, !fourthColor);
                break;
            case 5:
                updateDayFlag(5, !fifthColor);
                break;
            case 6:
                updateDayFlag(6, !sixthColor);
                break;
            case 0:
                updateDayFlag(7, !seventhColor);
                break;
        }
        setModalVisible(!modalVisible);
        el.hasSquare = modalVisible;
        if (!modalVisible)
            el.daysCounter = el.daysCounter + 1;
        else el.daysCounter = el.daysCounter - 1;
        updateHandler(el);
    }
    function updateDayFlag(key, value) {
        switch (key) {
            case 1:
                setFirstColor(value);
                el.firstDay = firstColor;
                break;
            case 2:
                setSecondColor(value);
                el.secondDay = secondColor;
                break;
            case 3:
                setThirdColor(value);
                el.thirdDay = thirdColor;
                break;
            case 4:
                setFourthColor(value);
                el.fourthDay = fourthColor;
                break;
            case 5:
                setFifthColor(value);
                el.fifthDay = fifthColor;
                break;
            case 6:
                setSixthColor(value);
                el.sixthDay = sixthColor;
                break;
            case 7:
                setSeventhColor(value);
                el.seventhDay = seventhColor;
                break;
            default:
                break;
        }
    }
    function changeDays(value) {
        el.firstDay = value;
        el.secondDay = value;
        el.thirdDay = value;
        el.fourthDay = value;
        el.fifthDay = value;
        el.sixthDay = value;
        el.seventhDay = value;
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
    function getColor(day) {
        switch (day) {
            case 1:
                if (firstColor) {
                    var ratio = el.daysCounter / curDay;
                    return returnColor(ratio);
                } else return "white"; 
                break;
            case 2:
                if (secondColor) {
                    var ratio = el.daysCounter / curDay;
                    return returnColor(ratio);
                } else return "white";
                break;
            case 3:
                if (thirdColor) {
                    var ratio = el.daysCounter / curDay;
                    return returnColor(ratio);
                } else return "white";
            case 4:
                if (fourthColor) {
                    var ratio = el.daysCounter / curDay;
                    return returnColor(ratio);
                } else return "white";
            case 5:
                if (fifthColor) {
                    var ratio = el.daysCounter / curDay;
                    return returnColor(ratio);
                } else return "white";
            case 6:
                if (sixthColor) {
                    var ratio = el.daysCounter / curDay;
                    return returnColor(ratio);
                } else return "white";
            case 7:
                if (seventhColor) {
                    var ratio = el.daysCounter / curDay;
                    return returnColor(ratio);
                } else return "white";
            default:
                return "white";
        }
    }
    function returnColor(ratio) {
        if (ratio > 0.9)
            return "green";
        else if (ratio > 0.7 && ratio <= 0.9)
            return "yellow";
        else if (ratio > 0.45 && ratio <= 0.7)
            return "orange";
        else if (ratio <= 0.45)
            return "red";
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
                        <View style={styles.openCircle(getColor(1))} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle(getColor(2))} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle(getColor(3))} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle(getColor(4))} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle(getColor(5))} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle(getColor(6))} />
                    </View>
                    <View style={styles.open}>
                        <View style={styles.openCircle(getColor(7))} />
                    </View>
                    <View style={styles.opSquare}>
                        {canWork ? < CheckBox
                        checked={modalVisible}
                        style={styles.checkbox}
                        size={35}
                        uncheckedColor="#565656"
                        checkedColor="black"
                        onPress={flag}
                                /> : < CheckBox
                                        checked={false}
                                        style={styles.checkbox}
                                        size={35}
                                        uncheckedColor="black"
                                        checkedColor="black"
                                    />}
                    </View>
                    </View>
                        {canWork ?
                            <Text style={styles.text}>{curDay} день, {textOffset} {day} {dayOffset}, {el.daysCounter}/{curDay}</Text> :
                            <Text style={styles.text}>{finalText}</Text>
                        }
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

    openCircle: color => ({
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        borderWidth: 2,
        borderColor: "black",
        width: 25,
        height: 25,
        borderRadius: 50,
    }),

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