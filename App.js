import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button style={styles.button} title="Increment" onPress = {()=> setCounter(counter+1)}></Button>
      <Button style={styles.button} title="Decrement" onPress = {()=> setCounter(counter-1)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
