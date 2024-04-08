import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Alert, Image} from 'react-native';
import Buttons from '../componentes/buttons';



export default function Interfaz1({ navigation }) {
  return (
    <View style={styles.container}>

      
      <ImageBackground source={require('../src/assets/login.png')} style={styles.image} blurRadius={2} >
      <Text style={styles.titulo}>FRIENDLAY!</Text>
      <Text style={styles.subTitle}>USUARIO</Text>
      <Text style={styles.subTitle}>CONTRASEÑA</Text>
      <TextInput
        placeholder='correo_electronico@gmail.com'
        style={styles.textInput}
        />
      <TextInput
        placeholder='pasword'
        style={styles.textInput}
        />

        <Buttons label={'Ingresar'} onPress={() => navigation.navigate('Interfaz2')}></Buttons>

        <Image style={styles.imagen} source={{uri: 'https://c.tenor.com/npi4NfiGKBMAAAAM/hello.gif'}} />

      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    color: '#000000',
  },
  titulo: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    top: 120,
  },
  subTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffff',
    padding: 10,
    marginTop: 120,
    top: 250,
  },
  textInput: {
    backgroundColor: '#D9D9D98F',
    textAlign: 'center',
    padding: 10,
    alignContent: 'center',
    width: '80%',
    height: 60,
    marginTop: 120,
    borderRadius: 30,
    top: -40,
  },
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    height: 160,
    width: 190,
    top: -610,
  },
});


