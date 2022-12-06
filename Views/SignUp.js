import React, { useState } from 'react'
import {TextInput, Text, ScrollView, StatusBar, Image, StyleSheet, TouchableHighlight} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { useGlobalContext } from './Context';

const SignUp = () => {
  
  const [CNE, setCNE] = useState("");
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [password, setPassword] = useState("");

  const colors = useGlobalContext();



  const signUpProps = {
    style: { ...styles.signUp, backgroundColor: colors.myBlue },
    underlayColor: colors.myDarkGrey,
    onPress : () => Actions.Home()
  }

  const containerProps = {
    contentContainerStyle : {...styles.container, backgroundColor: colors.bgColor},
    keyboardShouldPersistTaps : 'handled'
  }

  return (

      <ScrollView {...containerProps}>
      <StatusBar style="auto" />

      <Image style={styles.HeaderLogo} source={require('../assets/QRaytiText.png')} />
      <Text style={{ ...styles.HeaderText, color: colors.myBlue }}>CREATION DU COMPTE</Text>
      <TextInput
        style={{...styles.input, backgroundColor : colors.myGrey}}
        value={CNE}
        placeholder={"CNE *"}
        onChangeText={(text) => setCNE(text)}
      />
      <TextInput
        style={{...styles.input, backgroundColor : colors.myGrey}}
        value={Prenom}
        placeholder={"Prénom *"}
        onChangeText={(text) => setPrenom(text)}
      />
      <TextInput
        style={{...styles.input, backgroundColor : colors.myGrey}}
        value={Nom}
        placeholder={"Nom *"}
        onChangeText={(text) => setNom(text)}
      />
      <TextInput
        style={{...styles.input, backgroundColor : colors.myGrey}}
        value={password}
        placeholder={"Mot de passe *"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableHighlight {...signUpProps}>
        <Text style={{ ...styles.SignUpText, color: colors.bgColor }}>Créer un compte</Text>
      </TouchableHighlight>

      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 18 : StatusBar.currentHeight
  },
  HeaderLogo: {
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20
  },
  HeaderText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginBottom: 30
  },
  input : {
    paddingHorizontal: 15,
    height: 45,
    width: '80%',
    borderRadius: '20%',
    marginTop: 15,
    fontSize: 16,
  },
  signUp : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '8%',
    maxHeight: 45,
    width: '80%',
    borderRadius: '15%',
    marginTop: 25,
    marginBottom:20
  },
  SignUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }
});

export default SignUp