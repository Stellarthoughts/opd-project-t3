import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAStorageItem, setAStorageKey, addToAStorageKey, removeFromAStorageKey, replaceInAStorageKey } from '../../storage/Storage';
import Header from '../../common/Header';
import CButton from '../../common/CButton';
import WeekItem from './WeekItem';
import Images from '../../../resources';

const ScheduleScreen = ({navigation}) => {
    const storageKey = 'Schedule';

    const [ListOfItems, setListItem] = useState(async () => {
        let storage = await getAStorageItem(storageKey);
        storage = sortSubtaskToWeek(storage);
        setListItem(storage);
    })

    // Выбраная дата
    const [date, setDate] = useState(new Date());
    // Массив дней недели
    const [dateWeek, setDateWeek] = useState([
        {shortName: "Пн", date: date, subtasksItem: [], key: '1'},
        {shortName: "Вт", date: date, subtasksItem: [], key: '2'},
        {shortName: "Ср", date: date, subtasksItem: [], key: '3'},
        {shortName: "Чт", date: date, subtasksItem: [], key: '4'},
        {shortName: "Пт", date: date, subtasksItem: [], key: '5'},
        {shortName: "Сб", date: date, subtasksItem: [], key: '6'},
        {shortName: "Вс", date: date, subtasksItem: [], key: '7'},
    ]);

    // Тестовая функция
    const addtest = async () => {
        const text = "text";
        const key1 = Math.random().toString(36).substring(7);
        const key2 = Math.random().toString(36).substring(7);
        const taskDate = new Date(date);
        const todaysDate = new Date();
        await addToAStorageKey(storageKey,
            {
                title: text,
                completedTask: 1,
                countTask: 2,
                subtasksItem: [
                    {name: "Задача 1", key: Math.random().toString(36).substring(7), done: true},
                    {name: "Сходить в магазин", key: Math.random().toString(36).substring(7), done: false}
                ],
                date: new Date(2021, 11, 15),
                id: Math.random().toString(36).substring(7),
                expiredDate: taskDate < todaysDate ? true : false,
            });
        await addToAStorageKey(storageKey,
            {
                title: text,
                completedTask: 1,
                countTask: 3,
                subtasksItem: [
                    {name: "Задача 1", key: Math.random().toString(36).substring(7), done: false},
                    {name: "Сходить в магазин", key: Math.random().toString(36).substring(7), done: false},
                    {name: "Купить сыр", key: Math.random().toString(36).substring(7), done: true}
                ],
                date: new Date(2021, 11, 16),
                id: Math.random().toString(36).substring(7),
                expiredDate: taskDate < todaysDate ? true : false,
            });
        await addToAStorageKey(storageKey,
            {
                title: text,
                completedTask: 2,
                countTask: 4,
                subtasksItem: [
                    {name: "Задача 1", key: Math.random().toString(36).substring(7), done: false},
                    {name: "Сходить в магазин", key: Math.random().toString(36).substring(7), done: true},
                    {name: "Купить запад", key: Math.random().toString(36).substring(7), done: false},
                    {name: "Купить запад 2", key: Math.random().toString(36).substring(7), done: true}
                ],
                date: new Date(2021, 11, 13),
                id: Math.random().toString(36).substring(7),
                expiredDate: taskDate < todaysDate ? true : false,
            });
        await addToAStorageKey(storageKey,
            {
                title: text,
                completedTask: 2,
                countTask: 3,
                subtasksItem: [
                    {name: "Сходить в магазин", key: Math.random().toString(36).substring(7), done: true},
                    {name: "Купить запад 4", key: Math.random().toString(36).substring(7), done: false},
                    {name: "Купить запад 2", key: Math.random().toString(36).substring(7), done: true}
                ],
                date: new Date(2021, 11, 20),
                id: Math.random().toString(36).substring(7),
                expiredDate: taskDate < todaysDate ? true : false,
            });
    }

    // Сортировка подзадач по дням недели
    const sortSubtaskToWeek = async (storage) => {
        let array = storage;
        array.forEach((task) => {
            var dateTemp = new Date(date)
            for (var i = 0; i < 7; i++) {
                if (new Date(task.date).getDate() == dateTemp.getDate() && new Date(task.date).getMonth() == dateTemp.getMonth() && new Date(task.date).getFullYear() == date.getFullYear()) {
                    task.subtasksItem.forEach((subtask) => {
                        switch (i) {
                            case 0:
                                getDateWeekByName("Пн").subtasksItem.push(subtask);
                                break;
                            case 1:
                                getDateWeekByName("Вт").subtasksItem.push(subtask);
                                break;
                            case 2:
                                getDateWeekByName("Ср").subtasksItem.push(subtask);
                                break;
                            case 3:
                                getDateWeekByName("Чт").subtasksItem.push(subtask);
                                break;
                            case 4:
                                getDateWeekByName("Пт").subtasksItem.push(subtask);
                                break;
                            case 5:
                                getDateWeekByName("Сб").subtasksItem.push(subtask);
                                break;
                            case 6:
                                getDateWeekByName("Вс").subtasksItem.push(subtask);
                                break;
                        }
                    })
                }
                dateTemp.setDate(dateTemp.getDate()+1);
            }
        })
        return array;
    }

    // Загрузка стартовой недели
    useEffect(() => {
        startDateWeek();
    }, [])

    // Получение элемента из хука dateWeek по shortName
    const getDateWeekByName = (shortName) => {
        return dateWeek.find((item) => item.shortName == shortName);
    }

    // Получение сдвинутого индекса дня недели
    const getIndexDate = () => {
        var index = [6, 0, 1, 2, 3, 4, 5];
        var dateTemp = new Date();
        return index[dateTemp.getDay()];
    }

    // Получение строковой переменной нужного месяца
    const getMonthString = (date) => {
        var name = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];
        var dateTemp = new Date(date);
        return name[dateTemp.getMonth()];
    }

    // Получение начальной недели и date с понедельника
    const startDateWeek = () => {
        var dateTemp = new Date();
        dateTemp.setDate(dateTemp.getDate() - getIndexDate());
        date.setDate(date.getDate() - getIndexDate());
        updateDateWeek(dateTemp);
    }

    // Обновление данных недели по дате понедельника
    const updateDateWeek = async (date) => {
        var dateTemp = new Date(date);
        var monday = new Date(dateTemp.setDate(dateTemp.getDate()));
        var tuesday = new Date(dateTemp.setDate(dateTemp.getDate() + 1));
        var wednesday = new Date(dateTemp.setDate(dateTemp.getDate() + 1));
        var thursday = new Date(dateTemp.setDate(dateTemp.getDate() + 1));
        var friday = new Date(dateTemp.setDate(dateTemp.getDate() + 1));
        var saturday = new Date(dateTemp.setDate(dateTemp.getDate() + 1));
        var sunday = new Date(dateTemp.setDate(dateTemp.getDate() + 1));
        setDateWeek((list) => {
            return [
                {shortName: "Пн", date: monday, subtasksItem: [], key: '1'},
                {shortName: "Вт", date: tuesday, subtasksItem: [], key: '2'},
                {shortName: "Ср", date: wednesday, subtasksItem: [], key: '3'},
                {shortName: "Чт", date: thursday, subtasksItem: [], key: '4'},
                {shortName: "Пт", date: friday, subtasksItem: [], key: '5'},
                {shortName: "Сб", date: saturday, subtasksItem: [], key: '6'},
                {shortName: "Вс", date: sunday, subtasksItem: [], key: '7'},
            ]
        });
    }

    // Получает текст заголовка
    const formatTitle = () => {
        if (getMonthString(getDateWeekByName("Пн").date) === getMonthString(getDateWeekByName("Вс").date))
            return getDateWeekByName("Пн").date.getDate() + " - " + getDateWeekByName("Вс").date.getDate() + " " + getMonthString(getDateWeekByName("Пн").date)
        else
            return getDateWeekByName("Пн").date.getDate() + " " + getMonthString(getDateWeekByName("Пн").date) + " - " + getDateWeekByName("Вс").date.getDate() + " " + getMonthString(getDateWeekByName("Вс").date)
    }

    // Смена на следующую неделю
    const swapDateNext = async () => {
        date.setDate(date.getDate() + 7);
        updateDateWeek(date);

        let storage = await getAStorageItem(storageKey);
        sortSubtaskToWeek(storage);

        // заполненние тестовыми данными
        //addtest()
    }

    // Смена на предыдущую неделю
    const swapDatePrevious = async () => {
        date.setDate(date.getDate() - 7);
        updateDateWeek(date);

        let storage = await getAStorageItem(storageKey);
        sortSubtaskToWeek(storage);
    }

    const updateHandler = async (replacement) => {
        let tasks = await replaceInAStorageKey(storageKey,replacement);
        setListItem(tasks);
    }

    // Вывод элемента недели
    function renderItem({item})
    {
        return <WeekItem el={item} set={setDateWeek} updateHandler={updateHandler}/>
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={stylesP.viewDate}>
                <View style={stylesP.header}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL("https://tusur.ru")}
                        style={{flex: 1}}>
                        <ImageBackground
                            source={Images.tusur.logo}
                            style={stylesP.logo}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}
                    >
                    <ImageBackground
                        source={Images.settings.button}
                        style={stylesP.settingsButton}>
                    </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={stylesP.container}>
                    <CButton style={{backgroundColor: "#fff"}} styleText={{fontSize: 16, color: "#000"}}
                            isShadow={false} onPress={swapDatePrevious}
                            title="←"/>
                    <Text style={stylesP.title}>{formatTitle()}</Text>
                    <CButton style={{backgroundColor: "#fff"}} styleText={{fontSize: 16, color: "#000"}}
                            isShadow={false} onPress={swapDateNext}
                            title="→"/>
                </View>
                <FlatList style={{paddingHorizontal: 13}} data={dateWeek} renderItem={(item) => renderItem(item)}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const stylesP = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
        padding: 15,    
    },

    title: {
        fontSize: 16
    },

    viewDate: {
        flex: 1,
        width: "100%",
    },

    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 8,
        marginLeft: 16,
        marginRight: 25,
        marginBottom: 12,
    },

    logo: {
        marginTop: 8,
        height: 23,
        width: 220
    },

    settingsButton: {
        marginTop: 2,
        width: 35,
        height: 35
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 12,
        width: "100%",
        backgroundColor: "#F3F3F3",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default ScheduleScreen;