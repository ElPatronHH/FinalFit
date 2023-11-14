import React from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import {BlurView} from 'expo-blur';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'
const profilePicture = 'https://randomuser.me/api/portraits/men/34.jpg'
//const profilePicture = require('./assets/user.png');


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenido a la pantalla de inicio</Text>
    </View>
  );
}

function LoginScreen() {
  
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Cuenta Creada!')
      const user = userCredential.user;
      console.log(user)
      Alert.alert("Cuenta Creada!")
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }


  const handleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Sesion iniciada!')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Pagina Principal');
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }
 

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]}></Image>
      <View style={{width: 100, height: 100, backgroundColor: 'green', position: 'absolute'}}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'pink', top: 120, position: 'absolute', transform: [{rotate: '25deg'}]}}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'white', bottom: 120, position: 'absolute', borderRadius: 50, transform: [{rotate: '50deg'}]}}></View>
      <ScrollView contentContainerStyle={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <BlurView intensity={90}>
          <View style={styles.login}>
            <Image source={{ uri: profilePicture }} style={styles.profilePicture}></Image>
            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'wihte'}}>Correo</Text>
              <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='ejemplo@gmail.com'></TextInput>
            </View>
            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'wihte'}}>Contraseña</Text>
              <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='****' secureTextEntry = {true}></TextInput>
            </View>
            <TouchableOpacity onPress={handleSingIn} style={[styles.button, {backgroundColor: '#00CFE899'}]}>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Iniciar Sesion</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, {backgroundColor: '#6792F099'}]}>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Crear cuenta nueva</Text>
            </TouchableOpacity>
          </View>
        </BlurView>

      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio de Sesion/Registro" component={LoginScreen}/>
        <Stack.Screen name="Pagina Principal" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    //<LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'mode',
  },
  login: {
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#00CFE890',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },
});
