import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './features/focus/focus';

export default function App() {
const [focusSubject, setFocusSubject ] = useState(false)

  return (
    <View style={styles.container}>
      
      <Text> {focusSubject ? (<Text> is this True </Text>) : (  <Focus /> )}</Text>
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
});
