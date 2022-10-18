import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Switch, TouchableOpacity, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useGlobalContext } from './Context';

export default function App({navigation}) {

  {/* Importing the Languages with the different properties and text of each language,
  to be used in the useEffect hook to change appearance based on language
  ( check Context in ./Context.jsx ) */}
  const Languages = useGlobalContext();

  {/* Using colors defined as an object, so that when the mode (dark/light) is switched
  only the value (color) or each key (color's name) are switched
  With the use of the useState hook to easily achieve the switching*/}
  const [colors, setColors] = useState({ darkBlue: '#292e49', myGrey: '#e5e8f4', myBlue: '#0d98ba', bgColor: 'white', myDarkGrey: '#B4B6B6' });

  {/* if isEnabled == true, the dark mode is then enabled, and the colors will be
  switched using the setColors method defined above*/}
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    setColors({ darkBlue: colors.bgColor, myGrey: colors.myBlue, myBlue: colors.myGrey, bgColor: colors.darkBlue, myDarkGrey: colors.myDarkGrey })
  }

  {/* Buttons : SignIn & SignUp & ChangeLanguage,
  The style of each one is defined using BOTH the object written in styles
  and also a specific background color property to which a variable was assigned,
  this is done so that the background color is changed accordingly with the variable
  which is also changed if the dark mode is enabled/disabled */ }
  const SignInProps = {
    style: { ...styles.SignIn, backgroundColor: colors.darkBlue },
    underlayColor: colors.myDarkGrey, /* bg-Color changing on touch */
    onPress: () => navigation.push('SignIn') /* onPress is required */
  }
  const SignUpProps = {
    style: { ...styles.SignUp, backgroundColor: colors.myGrey },
    underlayColor: colors.myDarkGrey, /* bg-Color changing on touch */
    onPress: () => navigation.push('SignUp') /* onPress is required */
  }
  const ChangeLanguageProps = {
    style: { ...styles.changeLanguage },
    onPress: () => { setShowLP(!showLP) }
  }

  {/* useState hook used to update the language and the changing text based on each one */ }
  const [language, setLanguage] = useState('fr')

  {/* object destructuring, getting the text values in french, by default, this will be changed using
    useEffect if the user wants to*/}
  const [{ ...vars }, setVars] = useState(Languages.French)

  {/* when the setLanguage method changes the language, that triggers the useEffect hook to rerender (update)
    the view, set the changeable text to change each time the language is changed using the setLanguage*/}
  function chanLan() {
    language === 'fr' ? setVars(Languages.French) :
    (language === 'ar') ? setVars(Languages.Arabic):setVars(Languages.English)
  }
  useEffect(() => chanLan(), [language]);

  {/* the Language Picker View is showed/hidden based on the showLP (Line 101) */}
  const [showLP, setShowLP] = useState(false);

  return (

    <SafeAreaView style={{ ...styles.container, backgroundColor: colors.bgColor }}>

      <StatusBar style="auto" />

      {/* logo and welcoming text view */}
      <View style={styles.Header}>
        <Image style={styles.HeaderLogo} source={isEnabled ? require('../assets/QRaytiTextInvert.png') : require('../assets/QRaytiText.png')} />
        <Text style={{ ...styles.HeaderText, color: colors.darkBlue }}>{vars.HeaderText}</Text>
      </View>

      {/* signIn & signUp buttons, (using touchableHighlight to implement the hover like state
        using underlayColor) */}
      <TouchableHighlight {...SignInProps} >
        <Text style={{ ...styles.SignInText, color: isEnabled ? colors.bgColor : colors.myGrey }}>{vars.SignInText}</Text>
      </TouchableHighlight>
      <TouchableHighlight {...SignUpProps}>
        <Text style={{ ...styles.SignUpText, color: colors.darkBlue }}>{vars.SignUpText}</Text>
      </TouchableHighlight>
      
      {/* The Footer that contains the changeLanguage button that shows the Language Picker
        and also the dark/light mode switch*/}
      <View style={styles.Footer}>
        <TouchableOpacity {...ChangeLanguageProps}><Text style={{ color: colors.darkBlue}}>{vars.ChangeText}</Text></TouchableOpacity>

        <View style={styles.modeSwitch}>
          <Text style={{ marginRight: 10, color: colors.darkBlue }}>{isEnabled ? "Light Mode" : "Dark Mode"}</Text>
          <Switch
            trackColor={{ false: colors.darkBlue, true: colors.myBlue }}
            thumbColor={colors.myGrey}
            ios_backgroundColor={colors.darkBlue}
            onValueChange={toggleSwitch}
            value={isEnabled} />
        </View>
      </View>
      
      {/* The Language Picker View is visible if showLP == true, showLP's value
        is changed when ChangeLanguage Button (See above) is Pressed*/}
      {
        showLP &&
        <View style={{ ...styles.languagePicker, backgroundColor: colors.darkBlue }}>
          <Picker
            selectedValue={language}
            onValueChange={(itemValue) => setLanguage(itemValue)}
          >
            <Picker.Item color={colors.bgColor} label={vars.Labels[0]} value='fr' />
            <Picker.Item color={colors.bgColor} label={vars.Labels[1]} value='ar' />
            <Picker.Item color={colors.bgColor} label={vars.Labels[2]} value='en' />
          </Picker>
          <TouchableOpacity onPress={() => { setShowLP(!showLP) }} style={{ ...styles.TogglePicker, backgroundColor: colors.bgColor }}><Text style={{ ...styles.TogglePickerText, color: colors.darkBlue }}>{vars.OK}</Text></TouchableOpacity>
        </View>
      }

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
    top: 150,
    maxWidth: '100%'
  },
  HeaderLogo: {
    height: 50,
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
    width: 280,
    borderRadius: 10,
    marginTop: 60
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
    paddingHorizontal: 60,
    maxHeight: 45,
    width: 280,
    borderRadius: 10,
    marginTop: 15
  },
  SignUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  Footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%'
  },
  changeLanguage: {
    position: 'absolute',
    left: 10
  },
  languagePicker: {
    position: 'absolute',
    height: '35%',
    width: '100%',
    bottom: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  TogglePicker: {
    position: 'absolute',
    bottom: 12,
    right: 20,
    paddingTop: 5,
    paddingRight: 8,
    paddingBottom: 5,
    paddingLeft: 8,
    borderRadius: 10
  },
  TogglePickerText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  modeSwitch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
  }
});