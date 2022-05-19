import { StyleSheet, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native'
import React, {useEffect, useState} from 'react'
import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let errorMessage;

    const navigation = useNavigation()

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            if(user){
               navigation.replace("Home");
            }
            auth.signOut()
        })

        return unsuscribe;

    }, [])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCrendetials => {
            const user = userCrendetials.user;
            alert("Usuario registrado!");
        })
        .catch(error => {
            errorMessage = error.message;
        })
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCrendetials => {
            const user = userCrendetials.user;

        })
        .catch(error => {
            errorMessage = error.message;
            alert(errorMessage)
        })
            
    }

  return (
    <KeyboardAvoidingView
      style = {styles.container} 
    >
        <View>
            <Text style = {styles.tittle}> LoginAPP </Text>
        </View>
        <View style = {styles.inputContainer}>
             <Text style = {styles.errorMessage}></Text>
            <TextInput
                placeholder = "email"
                value = {email}
                onChangeText = {text => setEmail(text)}
                style = {styles.input}
            />
            <TextInput
                placeholder = "Password"
                value = {password}
                onChangeText = {text => setPassword(text)}
                style = {styles.input}
                secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress = {handleLogin}
                style = {styles.button}
            >
                <Text style={styles.buttonText}>Iniciar Sesion</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {handleSignUp}
                style = {[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Registrarse</Text>
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    tittle:{
        fontSize: 35,
        marginBottom: 30,
        backgroundColor: "blue",
        color: 'white',
        borderRadius: 20,
        padding:10,
    },
    inputContainer : {width: '80%'},
    input: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginTop: 5,
    },
    button: {
        backgroundColor: 'blue',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'blue',
        borderWidth: 2

    },
    buttonOutlineText: {
        color: 'blue',
        fontWeight: '800',
        fontSize: 16,
    },
    buttonText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 16,
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    errorMessage:{
        color:"red",
        fontSize: 20
    }
})