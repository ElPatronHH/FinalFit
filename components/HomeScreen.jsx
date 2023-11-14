import React, { useState} from "react";
import {
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

export default function HomeScreen() {
    const [nombreValue, setNombre] = useState("");
    const [apellidoValue, setApellido] = useState("");
    const [fechaValue, setFecha] = useState("");
    const [data, setData] = useState([]);

    const agregarDatos = () => {
        const nuevoDato = {
            nombre: nombreValue,
            apellido: apellidoValue,
            fecha: fechaValue
        };
        setData([...data, nuevoDato]);
        setNombre("");
        setApellido("");
        setFecha("");
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Bienvenido a la pantalla de inicio</Text>
          <TextInput
            onChangeText={(text) => setNombre(text)}
            value={nombreValue}
            placeholder="Escribe algo..."
          />
          <TextInput
            onChangeText={(text) => setNombre(text)}
            value={apellidoValue}
            placeholder="Escribe algo..."
          />
          <TextInput
            onChangeText={(text) => setNombre(text)}
            value={fechaValue}
            placeholder="Escribe algo..."
          />
          <Button/>
      </View>
    );
  }