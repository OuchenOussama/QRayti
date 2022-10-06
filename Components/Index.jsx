import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { useGlobalContext } from './Context';

export default function App() {

    {/* importing the Languages with the different properties and text of each language,
        to be used in the useEffect hook to change appearance based on language
        ( check Context in ./Context.jsx ) */}
    const Languages = useGlobalContext();

  {/* SignIn & SignUp props, the background color changing on touch using underlayColor */}
  const SignInProps = {
    style : styles.SignIn,
    underlayColor: '#3d425c',
    onPress : () => console.log("SignIn Pressed") /* onPress is required */
  }
  const SignUpProps = {
    style : styles.SignUp,
    underlayColor: '#ecedf2',
    onPress : () => console.log("SignUp Pressed") /* onPress is required */
  }
  
  {/* useState hook use to update the language and the changing text based on each one */}
  let [language, setLanguage] = useState('fr')

  {/* object destructuring, getting the text values in french, by default, this will be changed using
    useEffect if the user wants to*/}
    let [{HeaderText, SignInText, SignUpText, ChangeText}, setVars] = useState(Languages.French) 

    {/* when the setLanguage method changes the language, that triggers the useEffect hook to rerender (update)
    the view, set the changeable text to change each time the language is changed using the setLanguage*/}
useEffect(() => (
    language === 'fr' ? () => (setVars(Languages.French)):
    language === 'ar' ? () => (setVars(Languages.Arabic)):
    () => (setVars(Languages.English))
    ), [language]);


return (

<View style={styles.container}>

    <StatusBar style="auto" />

    {/* logo and welcoming text view */}
    <View style={styles.Header}>
        <Image style={styles.HeaderLogo} source={require('../assets/QRaytiText.png')} />
        <Text style={styles.HeaderText}>{HeaderText}</Text>
    </View>
    
    {/* signIn & signUp buttons, (using touchableHighlight to implement the hover like state
        using underlayColor) */}
    <TouchableHighlight {...SignInProps} >
        <Text style={styles.SignInText}>{SignInText}</Text>
    </TouchableHighlight>
    <TouchableHighlight {...SignUpProps}>
        <Text style={styles.SignUpText}>{SignUpText}</Text>
    </TouchableHighlight>


    {/* for testing, not yet fully implemented */}
    <TouchableHighlight style={styles.SignUp} onPressIn={language === 'fr'? () => setLanguage('ar'):language === 'ar'? () => setLanguage('en'): () => setLanguage('fr')}>
        <Text>{ChangeText}</Text>
    </TouchableHighlight>
    
</View>
);

}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    Header : {
      flex:'1',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 150,
      maxWidth: '100%'
    },
    HeaderLogo : {
      height: 50,
      resizeMode: 'contain',
      marginBottom: 20
    },
    HeaderText : {
      textAlign: 'center',
      fontSize: 18,
      paddingHorizontal: 15
    },
    SignIn : {
      flex: '1',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 60,
      color: '#e5e8f4',
      backgroundColor: '#292e49',
      maxHeight: 45,
      width: 280,
      borderRadius: 10,
      marginTop: 100
    },
    SignInText : {
      color: '#e5e8f4',
      fontSize: 18,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      lineHeight: 45
    },
    SignUp : {
      flex: '1',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 60,
      backgroundColor: '#e5e8f4',
      maxHeight: 45,
      width: 280,
      borderRadius: 10,
      marginTop: 15
    },
    SignUpText : {
      color: '#292e49',
      fontSize: 18,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      lineHeight: 45
    }
  });
