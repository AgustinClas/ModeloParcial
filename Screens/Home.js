import { StyleSheet, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native'
import React from 'react'
import {auth} from "../firebase"
import { useNavigation } from '@react-navigation/native';
import { isValidElement } from 'react/cjs/react.production.min';


const HomeScreen = () => {

    const navigation = useNavigation()

 const handleSignOut = () => {
        auth.signOut()
        .then(() => {navigation.replace("Login")})
        .catch(error => alert(error.message));
    } 

  return (
    <KeyboardAvoidingView
    style = {styles.container} 
    >
    <View>
      <Text style = {styles.textTittle} >Bienvenido!</Text>
      <Text style = {styles.mail}>{auth.currentUser?.email}</Text>

        <TouchableOpacity
            onPress = {handleSignOut}
            style = {styles.button}
        >
                <Text style={styles.buttonOutlineText}>Cerrar sesion</Text>
        </TouchableOpacity>
    </View>

    </KeyboardAvoidingView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    mail:{
        fontSize: 25,
        color: 'blue',
        marginBottom: 20,
    },
    textTittle:{
        fontSize: 60,
        color: 'blue',
        borderRadius: 20,
        marginBottom: 15,
    },
    button: {
        backgroundColor: 'blue',
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15
    },
    buttonOutlineText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 16,
    },
})

