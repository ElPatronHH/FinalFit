import React, { useState} from "react";
import {Text, View, TextInput, Button} from "react-native";
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase-config';

export default function ReadCRUD() {
    const [nombreValue, setNombre] = useState("");
    const [apellidoValue, setApellido] = useState("");
    const [fechaValue, setFecha] = useState("");
    const [data, setData] = useState([]);

    const agregarDatos = async () => {
      try {
          const nuevoDato = {
              nombre: nombreValue,
              apellido: apellidoValue,
              fecha: fechaValue
          };
          const docRef = await addDoc(collection(firestore, 'users'), nuevoDato);
          console.log('Documento creado con ID: ', docRef.id);
          setData([...data, nuevoDato]);
          setNombre("");
          setApellido("");
          setFecha("");
      } catch (error) {
          console.error('Error al agregar datos a Firebase: ', error);
      }
  };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>CRUD Read</Text>
          <TextInput
            onChangeText={(text) => setNombre(text)}
            value={nombreValue}
            placeholder="Nombre..."
          />
          <TextInput
            onChangeText={(text) => setApellido(text)}
            value={apellidoValue}
            placeholder="Apellido..."
          />
          <TextInput
            onChangeText={(text) => setFecha(text)}
            value={fechaValue}
            placeholder="Fecha..."
          />
          <Button title="Cargar" onPress={agregarDatos} />
      </View>
    );
  }