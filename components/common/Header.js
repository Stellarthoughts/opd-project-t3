import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image, TouchableHighlight} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Images from '../../resources';

function Header ({navigation}) {
    return (
        <View style={styles.container}>
            <NavigationElement 
                nav={navigation} node={'Tasks'}
                imageSrc={Images.header.tasks}
            />
            <NavigationElement 
                nav={navigation} node={'TasksTimed'}
                imageSrc={Images.header.tasks}
            />
            <NavigationElement 
                nav={navigation} node={'Schedule'}
                imageSrc={Images.header.building}
            />
            <NavigationElement 
                nav={navigation} node={'Habits'}
                imageSrc={Images.header.like}
            />
            <NavigationElement 
                nav={navigation} node={'Settings'}
                imageSrc={Images.header.settings}
            />
        </View>
    );
}

const NavigationButton = (nav, node) => {
    nav.navigate(node);
}

const NavigationElement = ({nav, node, imageSrc}) =>
{
    const active = useRoute().name == node ? true : false;
    const touchStyle = active ? styles.active : null;
    const pressEvent = active ? null : () => NavigationButton(nav, node);
    const size = active ? 40 : 40;

    return(
        <TouchableHighlight
            style={touchStyle}
            onPress={pressEvent}
            activeOpacity={0.6}
            underlayColor="#0ff9dd"
        >
            <View style={styles.button}>
                <Image
                    resizeMode="contain" 
                    style={[styles.icon, {width: size, height: size}]}
                    source={imageSrc}
                />  
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#05CEB6',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 5,
        width: 60,
        height: 50,
    },

    active: {
        backgroundColor: "#ffffff",
    },

    icon: {
        width: 40,
        height: 40,
    },
});

export default Header;