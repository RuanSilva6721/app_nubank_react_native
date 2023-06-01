import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';

export default function Home() {
  return (
    <View style={styles.container}>
    <Header name ="Ruan Felipe"/>
    <Balance balance="100,23" spent="23,89"/>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa',
    }
})
