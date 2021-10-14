import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = (props) => {
    return (
        <View style={styles.container}>
          <Text style={styles.textHint}>{props.text}</Text>
          <StatusBar style="auto"/>
        </View>
    );
}

const wtf = (number) =>
{
  return number + 1;
}

const wtf2 = (number) => {
    return number + 1;
}

const Something = () => {
  const iamagod = "Who?";
  return (
      <ScrollView style={styles.containerOther}>
        <Text>{iamagod}</Text>
        <View>
          <Text>Some more text {wtf(1)}</Text>
          <Image
              source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              style={{ width: 200, height: 200 }}
          />
        </View>
        <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              width: 200
            }}
            defaultValue="You can type in me"
        />
        <App text="something"/>
        <App text="hi"/>
        <App text="i love you"/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHint: {
    color: 'red',
    backgroundColor: 'blue'
  },

  containerOther: {
    marginLeft: 40,
    marginTop: 40
  }
});

export default Something;
