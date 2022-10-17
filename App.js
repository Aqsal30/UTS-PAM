import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,  } from 'react-native';
import React, {useState} from 'react';
import Constants  from 'expo-constants';
import Hasil from './components/hasil';
import Tombol from './components/tombol';
import {Tampilan} from './components/tampilan';

export default function App() {
  const [waktu, setWaktu] = useState(0);
  const [jalan, setJalan] = useState(false);
  const [timer, setTimer] = useState(null);
  const [hasil, setHasil] = useState([]);
  
  const Tombol1 = () => {
    if(jalan) {
      clearInterval(timer);
    }else{
      const interval = setInterval(() => {
        setWaktu((sebelum) => sebelum + 1);
      },10);
      setTimer(interval);
    }
    setJalan((state) => !state)
  }; 

  const Tombol2 = () => {
    if(jalan){
      setHasil((HasilLalu) => {
        HasilLalu.unshift(waktu);
        return HasilLalu;
      });
    }else{
      setHasil([]);
      setWaktu(0);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.tampilan}>
        <Text style={styles.text}>{Tampilan(waktu)}</Text>
      </View>
      <View style={styles.tombol}>
        <Tombol
        jalan={jalan}
        Tombol1={Tombol1}
        Tombol2={Tombol2}
        />
      </View>
      <View style={styles.hasil}>
        <Hasil hasil={hasil}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: Constants.statusBarHeight,
  },
  tampilan: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color:"#FFFFFF",
    fontSize: 50,
    fontWeight: '200',
  },
  tombol:{
    height:70,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  hasil: { flex: 2},
});
