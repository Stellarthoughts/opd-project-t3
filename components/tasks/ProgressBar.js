import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

function ProgressBar ({height, backgroundColor, completedColor, completed, count}) {
    const [getheight, setHeight] = useState(height);
    const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
    const [getCompletedColor, setCompletedColor] = useState(completedColor);
    var percent = completed / count * 100;
    var percentString = percent.toString() + '%';
    return (
        <View style={styles.container}>
            <View style={{justifyContent: 'center'}}>
                <View
                    style={{
                        width: '100%',
                        height: height,
                        borderRadius: 5,
                        backgroundColor: getBackgroundColor,
                    }}
                />
                <View
                    style={{
                        width: percentString ? percentString : 0,
                        height: height,
                        borderRadius: 5,
                        backgroundColor: getCompletedColor,
                        position: 'absolute',
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        borderRadius: 5,
    },

});

export default ProgressBar;