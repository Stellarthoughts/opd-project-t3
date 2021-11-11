import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import Images from '../../resources';

function Header ({navigation}) {
    return (
        <View style={styles.container}>
            <NavigationElement 
                nav={navigation} node={'Home'}
                viewStyle={styles.button}
                imageSrc={Images.header.home}
                imageStyle={styles.icon}
            />
            <NavigationElement 
                nav={navigation} node={'Tasks'}
                viewStyle={styles.button}
                imageSrc={Images.header.building}
                imageStyle={styles.icon}
            />
            <NavigationElement 
                nav={navigation} node={'Tasks'}
                viewStyle={styles.button}
                imageSrc={Images.header.tasks}
                imageStyle={styles.icon}
            />
            <NavigationElement 
                nav={navigation} node={'Tasks'}
                viewStyle={styles.button}
                imageSrc={Images.header.like}
                imageStyle={styles.icon}
            />
            <NavigationElement 
                nav={navigation} node={'Settings'}
                viewStyle={styles.button}
                imageSrc={Images.header.settings}
                imageStyle={styles.icon}
            />
        </View>
    );
}

const NavigationButton = (nav, node) => {
    nav.navigate(node);
}

const NavigationElement = ({nav, node, imageSrc, viewStyle, imageStyle}) =>
{
    return(
        <TouchableWithoutFeedback onPress={() => NavigationButton(nav, node)}>
            <View style={viewStyle}>
                <Image 
                    style={imageStyle}
                    source={imageSrc}
                />    
            </View>
        </TouchableWithoutFeedback>
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
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: '#05CEB6',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },

    icon: {
        width: 35,
        height: 35,
    },

    textTitle: {
        color: "#eee7e7",
        fontSize: 22,
    },

    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: "#8fc998",
        borderRadius: 20,
    },

    menuButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: "#c2b5b5",
        borderRadius: 2,
    },

    textButton: {
        fontSize: 22,
    }
});

export default Header;