import { StyleSheet, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'

export default function Buttons({ label, onPress}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textoBoton}>{label}</Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FBFF03A8',
        alignSelf: 'center',
        borderRadius: 20,
        paddingVertical: 15,
        width: '20%',
        top: 30,
    },
    button2: {
        backgroundColor: '#D9D9D92F',
        borderColor: '#1F0FADA9',
        borderWidth: 3,
        alignSelf: 'center',
        borderRadius: 20,
        paddingVertical: 8,
        width: '42%',
        top: 50,
    },
    textoBoton: {
        textAlign: 'center',
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
