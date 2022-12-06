import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useGlobalContext } from './Context';

export default function App() {
  
  const colors = useGlobalContext();

  const SignInProps = {
    style: { ...styles.SignIn, backgroundColor: colors.darkBlue },
    underlayColor: colors.myDarkGrey,
    onPress: () => Actions.SignIn()
  }
  const SignUpProps = {
    style: { ...styles.SignUp, backgroundColor: colors.myGrey },
    underlayColor: colors.myDarkGrey,
    onPress: () => Actions.SignUp()
  }
  return (

    <SafeAreaView style={{ ...styles.container, backgroundColor: colors.bgColor }}>

      <StatusBar style="auto" />

      <View style={styles.Header}>
        <Image style={styles.HeaderLogo} source={require('../assets/QRaytiText.png')} />
        <Text style={{ ...styles.HeaderText, color: colors.darkBlue }}>Veuillez vous connecter ou vous inscrire pour continuer.</Text>
      </View>


      <TouchableHighlight {...SignInProps} >
        <Text style={{ ...styles.SignInText, color: colors.myGrey }}>Se conncter</Text>
      </TouchableHighlight>
      <TouchableHighlight {...SignUpProps}>
        <Text style={{ ...styles.SignUpText, color: colors.darkBlue }}>Créer un compte</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 200,
    maxWidth: '100%'
  },
  HeaderLogo: {
    height: '90%',
    resizeMode: 'contain',
    marginBottom: 20
  },
  HeaderText: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 15
  },
  SignIn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
    maxHeight: 45,
    width: '80%',
    borderRadius: '15%',
    marginTop: 100
  },
  SignInText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  SignUp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '8%',
    maxHeight: 45,
    width: '80%',
    borderRadius: '15%',
    marginTop: 15
  },
  SignUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }
});