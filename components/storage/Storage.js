import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getAStorageItem(key)
{
    try {
        const val = await AsyncStorage.getItem(key);
        if(val != null) {
            let parsed = JSON.parse(val);
            return parsed;
        }
        else  {
            let nullArr = [];
            await setAStorageKey(key,nullArr);
            return nullArr;
        }
    }
    catch(err) {
        console.log(err);
    } 
}

export async function setAStorageKey(key,item)
{
    try {
        await AsyncStorage.setItem(key,JSON.stringify(item));
    }
    catch(err) {
        console.log(err);
    }
}

export async function addToAStorageKey(key,item)
{
    let existingVals = await getAStorageItem(key);
    existingVals.push(item);
    setAStorageKey(key,existingVals);
}

export async function removeFromAStorageKey(key,item)
{
    try {
        let existingVals = await getAStorageItem(key);
        let filteredVals = existingVals.filter(function (e) {
            return e.id !== item.id
        })
        setAStorageKey(key,filteredVals);
        return filteredVals;
    }
    catch(err) {
        console.log(err);
    }
}