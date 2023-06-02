import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
    id: 1,
    label: 'Boleto de Luz',
    value: '390,90',
    data: '01/06/2023',
    type: 0
    },
    {
      id: 2,
      label: 'Pix Cliente Jorge',
      value: '140,90',
      data: '02/06/2023',
      type: 1
    },
    {
      id: 3,
      label: 'Salário',
      value: '330,90',
      data: '01/03/2023',
      type: 1
    },

]


export default function Home() {
  return (
    <View style={styles.container}>
      
    <Header name ="Ruan Felipe"/>
    <Balance balance="100,23" spent="23,89"/>
    <Actions/>
    <Text style={styles.title}>Últimas Movimentações</Text>
    <FlatList 
    style={styles.list} 
    data={list} keyExtractor={(item) => String(item.id)}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=> <Movements key={item.id} data={item} />} 
    />

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa',
        width: '84.5%'
    },
    title:{
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14,
      marginTop: -120

    },
    list:{
      marginStart:14,
      marginEnd: 14,
    },
    actions: {
      marginTop: 1000
    }
})
