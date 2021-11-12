import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image, TouchableHighlight} from 'react-native';
import Images from '../../resources';

function Header ({navigation}) {
    return (
        <View style={styles.container}>
            <NavigationElement 
                nav={navigation} node={'Home'}
                imageSrc={Images.header.home}
            />
            <NavigationElement 
                nav={navigation} node={'Tasks'}
                imageSrc={Images.header.building}
            />
            <NavigationElement 
                nav={navigation} node={'Tasks'}
                imageSrc={Images.header.tasks}
            />
            <NavigationElement 
                nav={navigation} node={'Tasks'}
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
    return(
        <TouchableHighlight 
            onPress={() => NavigationButton(nav, node)}
            activeOpacity={0.6}
            underlayColor="#0ff9dd"
        >
            <View style={styles.button}>
                <Image
                    resizeMode="contain" 
                    style={styles.icon}
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

    icon: {
        width: 40,
        height: 40,
    },
});

export default Header;