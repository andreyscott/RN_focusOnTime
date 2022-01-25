import { Text, TextInput, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import RoundButton from '../../components/RoundButton.tsx';

export const Focus = () => {
    return (
      <View style={{ flex: 1, padding: 50,}}>
        <View style ={styles.titleContainer} >
            <Text style={styles.title}>What would you like to Focus On</Text>
            <TextInput style={styles.input} placeholder="Focus" />
            <RoundButton size={50} title="Focus" />
            </View>
      </View>
    );
  }

    const styles = StyleSheet.create({
        titleContainer: {
            padding: 20,
            backgroundColor: '#262246',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            color: '#fff',
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        input: {
            width: 300,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 10,
            marginTop: 15,
            padding: 10,
        },
    });


