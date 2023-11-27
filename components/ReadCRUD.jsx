import React, { useState} from "react";
import {Text, View, TextInput, Button} from "react-native";
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';

export default function ReadCRUD() {
  const UserListScreen = () => {
    const [userNames, setUserNames] = useState([]);
  
    useEffect(() => {
      const fetchUserNames = async () => {
        try {
          const usersCollection = await firestore().collection('users').get();
          const names = usersCollection.docs.map((doc) => doc.data().nombre); // Ajusta 'nombre' al campo que almacena los nombres en tus documentos
          setUserNames(names);
        } catch (error) {
          console.error('Error al obtener nombres de usuarios:', error);
        }
      };
  
      fetchUserNames();
    }, []);

    const navigation = useNavigation();

    return (
      <View>
      <Text>Lista de Nombres de Usuarios:</Text>
      {userNames.map((name, index) => (
        <Text key={index}>{name}</Text>
      ))}
    </View>
  );}}