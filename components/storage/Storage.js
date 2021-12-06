import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getAStorageItem(key)
{
    const val = await AsyncStorage.getItem(key);
    if(val != null)
    {
        let parsed = JSON.parse(val);
        return parsed;
    }
    else 
    {
        let nullArr = [];
        await setAStorageKey(key,nullArr);
        return nullArr;
    }
}

export async function setAStorageKey(key,item)
{
    await AsyncStorage.setItem(key,JSON.stringify(item));
}

export async function addToAStorageKey(key,item)
{
    const existingVals = await getAStorageItem(key);
    existingVals.push(item);
    setAStorageKey(key,existingVals);
}