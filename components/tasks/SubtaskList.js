import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, Button, View, FlatList, Animated } from 'react-native';
import { useRef } from 'react/cjs/react.development';
import CButton from '../common/CButton';
import { CheckBox } from 'react-native-elements';
import GestureRecognizer from 'react-native-swipe-gestures';

function SubtaskList({ data, set, updateHandler, styles })
{
    // Logic
    const addSubtaskHandler = () => {
        set((list) => {
            const key = Math.random().toString(36).substring(7);
            let res = [
                ...list,
                {name: "", key: key, done: false}
            ]
            updateHandler(res, true);
            return res;
        })
    }

    const updateItemText = (key,text) =>
    {
        set((list) => {
            let ind = list.findIndex((item) => item.key == key);
            list[ind].name = text;
            updateHandler(list, false);
            return list;
        })
    }

    const updateItemDone = (key,flag) =>
    {
        set((list) => {
            let ind = list.findIndex((item) => item.key == key);
            list[ind].done = flag;
            updateHandler(list, false);
            return list;
        })
    }

    const deleteSubtask = (key) =>
    {
        set((list) => {
            let formatted = list.filter((e) => {
                return e.key !== key
            });
            updateHandler(formatted, false);
            return formatted;
        })
    }


    return (
        <View>
            <FlatList data={data} renderItem={({item}) => (
                <SubtaskListItem item={item} updateItemText={updateItemText}
                updateItemDone={updateItemDone} deleteSubtask={deleteSubtask} styles={styles}/>
            )}/>
            <CButton style={styles.subtaskButtonBg} styleText={{fontSize: 16, color: "#999"}}
            isShadow={false} onPress={addSubtaskHandler}
            title="+ Добавить подзадачу"/>
        </View>
    )
}

function SubtaskListItem({item, updateItemText, updateItemDone, deleteSubtask, styles})
{
    // Animation
    const animate_deletion_state = {
        start: 0,
        end: 1,
    }
    const inputRange = Object.values(animate_deletion_state);
    const deletionValue = useRef(new Animated.Value(animate_deletion_state.start)).current;
    const posOffset = deletionValue.interpolate({ inputRange, outputRange: [0, 1000] });

    const startAnimateDeletion = (event) => {
        Animated.timing(deletionValue, {toValue: animate_deletion_state.end, useNativeDriver: false, duration: 250}).start(() => deleteSubtask(item.key));
    }

    // Logic
    const [checked, setChecked] = useState(item.done);

    const changeState = (event) => {
        setChecked(!checked);
        updateItemDone(item.key, !checked);
    }

    return (
        <Animated.View style={[{marginLeft: posOffset}]}>
            <GestureRecognizer style={styles.subtaskItem}
                onSwipeRight={startAnimateDeletion}
                >
                <CheckBox
                checked={checked}
                size={25}
                containerStyle={styles.checkbox}
                uncheckedColor="#565656"
                checkedColor="black"
                onPress={changeState}
                />
                <TextInput
                style={styles.subtaskItemText, {
                    fontStyle: checked ? 'italic' : 'normal',
                    textDecorationLine: checked ? 'line-through' : 'none',
                    textDecorationStyle: 'solid'
                }}
                onEndEditing={(event) => updateItemText(item.key, event.nativeEvent.text)}
                placeholder="Новая подзадача"
                >
                    {item.name}
                </TextInput>
            </GestureRecognizer>
        </Animated.View>

    )
}

export default SubtaskList;
