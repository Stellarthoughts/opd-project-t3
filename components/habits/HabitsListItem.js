import React, {useState, useRef} from 'react';
import { StyleSheet, View, FlatList, Text, Image, Animated, TextInput, Modal } from 'react-native';
import CButton from '../common/CButton';

function HabitsListItem({ el }) {
    // Вывод элемента
    var curDay = Math.floor(Math.abs(el.currentDate - parseInt(new Date().getTime()) / 86400000)) + el.currentDay;
    if (curDay != el.currentDay && curDay != 1) {
        el.hasSquare = true;
        //el.currentDay = curDay;
    }
    const [modalVisible, setModalVisible] = useState(!el.hasSquare);
    const [firstColor, setFirstColor] = useState(false);
    const [secondColor, setSecondColor] = useState(false);
    const [thirdColor, setThirdColor] = useState(false);
    const [fourthColor, setFourthColor] = useState(false);
    const [fifthColor, setFifthColor] = useState(false);
    const [sixthColor, setSixthColor] = useState(false);
    const [seventhColor, setSeventhColor] = useState(false);
    var isColoredFirst = false
    var isColoredSecond = false
    var isColoredThird = false
    var isColoredThird = false
    var isColoredFourth = false
    var isColoredFifth = false
    var isColoredSixth = false
    var isColoredSeventh = false
    var isFlagged = false
    const flag = (event) => {
        //console.log(curDay)
        //console.log(el.currentDay)
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
        setModalVisible(isFlagged);
        el.hasSquare = !isFlagged;
    }
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <TextInput style={styles.title}>{el.title}</TextInput>
                <View style={ styles.circles }>
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
                        {!modalVisible ? <CButton style={styles.openSquare} onPress={flag} /> : <View style={styles.closeSquare} />}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        paddingBottom: 10,
    },

    info: {
        flex: 1,
        height: "auto",
        padding: 10,
    },

    title: {
        color: "#444",
        fontSize: 25,
        marginBottom: 15,
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
        marginLeft: 30,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
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
});

export default HabitsListItem;