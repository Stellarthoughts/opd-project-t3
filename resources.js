import { StyleSheet } from 'react-native';

const Images = {
    header: {
        home: require('./assets/header/house.png'),
        tasks: require('./assets/header/tasks.png'),
        like: require('./assets/header/thumb.png'),
        building: require('./assets/header/building.png'),
        settings: require('./assets/header/gears.png')
    },
    tasks: {
        openFolder: require('./assets/tasks/folder.png'),
        closedFolder: require('./assets/tasks/folderClosed.png')
    },
    timedTasks: {
        clock: require('./assets/timedTasks/clock.png'),
    },
    tusur: {
        logo: require('./assets/tusur.png'),
    },
    tabBar: {
        tasksActive: require('./assets/tabBarIcons/tasksActive.png'),
        tasksDisabled: require('./assets/tabBarIcons/tasksDisabled.png'),
        tasksTimedActive: require('./assets/tabBarIcons/tasksTimedActive.png'),
        tasksTimedDisabled: require('./assets/tabBarIcons/tasksTimedDisabled.png'),
        scheduleActive: require('./assets/tabBarIcons/scheduleActive.png'),
        scheduleDisabled: require('./assets/tabBarIcons/scheduleDisabled.png'),
        habbitsActive: require('./assets/tabBarIcons/habitsActive.png'),
        habbitsDisabled: require('./assets/tabBarIcons/habitsDisabled.png'),
    },
    settings: {
        button: require('./assets/settingsButton.png'),
    }
}

export default Images;

export const StylesShared = StyleSheet.create({
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomColor: '#1870CD',
        borderBottomWidth: 6
    },
    logo: {
        height: 23,
        width: 220
    },
    settingsButton: {
        width: 35,
        height: 35
    }
})