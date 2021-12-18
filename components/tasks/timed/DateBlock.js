import React, { useState } from "react";
import moment from 'moment';
import { View, Text, StyleSheet, Image } from 'react-native';
import Images from '../../../resources';

const DateBlock = ({ date, expiredDate }) => {
    let styledDate = moment(date).format('DD.MM.YYYY');

    const [dateColor, setDateColor] = useState(expiredDate);

    return (
        <View style={styles.timeBlock}>
            <Image style={styles.clock} source={Images.timedTasks.clock} />
            <Text style={[dateColor ? styles.dateExpired : styles.dateNotExpired]}>{styledDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timeBlock: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    dateExpired: {
        color: 'red',
        fontSize: 16
    },

    dateNotExpired: {
        color: 'black',
        fontSize: 16
    },

    clock: {
        height: 22,
        width: 24,
        marginRight: 7,
        marginLeft: 15,
        marginTop: 2
    },
});

export default DateBlock;
