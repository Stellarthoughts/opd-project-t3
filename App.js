import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/home/HomeScreen';
import { Header } from './components/common/Header';
import Tasks from './components/tasks/Tasks';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer style={styles.container}> 
          <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              title: 'Главная',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
            <Stack.Screen name="Tasks" component={Tasks}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
  },
});

export default App;