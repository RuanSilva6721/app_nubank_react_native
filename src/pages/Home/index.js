import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
    {
    id: 1,
    label: 'Boleto de Luz',
    value: '390,90',
    data: '01/06/2023',
    type: 0
    },
    {
      id: 1,
      label: 'Pix Cliente Jorge',
      value: '140,90',
      data: '02/06/2023',
      type: 1
    },
    {
      id: 1,
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
    <Text style={styles.title}>Últimas Movimentações</Text>
    <FlatList 
    style={styles.list} 
    data={list} keyExtractor={(item) => String(item.id)}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=> <Movements data={item} />} 
    />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title:{
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 14,
      marginRight:14,
      marginTop: 14,

    },
    list:{
      marginStart:14,
      marginEnd: 14
    }
})
