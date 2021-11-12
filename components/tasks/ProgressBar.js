import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

function ProgressBar ({navigation, percentage, height, backgroundColor, completedColor}) {
    const [getPercentage, setPercentage] = useState(percentage);
    const [getheight, setHeight] = useState(height);
    const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
    const [getCompletedColor, setCompletedColor] = useState(completedColor);
    return (
        <View>
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
                        width: getPercentage ? getPercentage : 0,
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
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

});

export default ProgressBar;