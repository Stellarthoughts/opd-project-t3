import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen ({navigation}) {
    return (
        <View>
            <Button title="Click me to get away."
            onPress={() => 
                navigation.navigate('Tasks')
            }
            />
        </View>
    );
}

export default HomeScreen;
