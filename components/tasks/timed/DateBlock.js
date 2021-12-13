import React from "react";
import moment from 'moment';
import { View, Text, StyleSheet, Image } from 'react-native';
import Images from '../../../resources';

const DateBlock = ({ date }) => {
    let settedDate = moment(date).format('DD.MM.YYYY');

    return (
        <View style={styles.timeBlock}>
            <Image style={styles.clock} source={Images.timedTasks.clock} />
            <Text style={styles.date}>{settedDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timeBlock: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    date: {
        // fontFamily: 'Roboto'
        // flex: 1
    },

    clock: {
        height: 25,
        width: 27,
        marginRight: 10,
        marginLeft: 15,
        marginTop: 2
    },
});

export default DateBlock;
