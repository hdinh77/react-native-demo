import { StatusBar } from 'expo-status-bar';
import React from 'react';
import GoogleMap from './components/GoogleMap';
import { Dimensions, StyleSheet, Text, View, Image, Alert, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
        {/*<Text>Open up App.js to start working on your app!</Text>
        <Text>Hello World!</Text>*/}
        <GoogleMap />
        {/*<Image source={{uri:'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2020/04/shelter-dog-cropped-1.jpg'}} style={{width: 500, height: 200}}/>
        
        <View style={styles.top}><Text>Hello top</Text></View>
        <View style={styles.middle}><Text>Hello middle</Text></View>
        <Button title="Press me"/>
            <StatusBar style="" />*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 20
  },
  top: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 1,
    width: Dimensions.get('screen').width - 20,
    alignItems: 'center',
  },
  middle: {
    flex: 0.3,
    backgroundColor: 'blue',
    borderWidth: 1,
    width: Dimensions.get('screen').width - 20,
    alignItems: 'center',
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'green',
    borderWidth: 1,
    width: Dimensions.get('screen').width - 20,
    alignItems: 'center',
  }
});
