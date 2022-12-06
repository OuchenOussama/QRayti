import React, {useState} from 'react'
import { ScrollView, Text, StatusBar, TextInput, TouchableHighlight, StyleSheet, Image, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useGlobalContext } from './Context'

const Account = () => {

  const [CNE, setCNE] = useState("D137272036");
  const [Nom, setNom] = useState("Ouchen");
  const [Prenom, setPrenom] = useState("Oussama");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const colors = useGlobalContext();

  const signUpProps = {
    style: { ...styles.signUp, backgroundColor: colors.myBlue },
    underlayColor: colors.myDarkGrey,
    onPress : () => {}
  }

  const containerProps = {
    contentContainerStyle : {...styles.container, backgroundColor: colors.bgColor},
    keyboardShouldPersistTaps : 'handled'
  }

  return (
    <ScrollView {...containerProps}>
      <StatusBar style="auto" />
      <Text style={{ ...styles.HeaderText, color: colors.myBlue }}>DONNEES PERSONNELLES</Text>

      <TouchableHighlight style={styles.Profile} onPress={() => {console.log("Modify pic")}}>
        <>
          <View style={{...styles.modifyImage}}>
            <Ionicons name="add-circle" size={30} color={colors.bgColor}></Ionicons>
          </View>
          <Image style={styles.ProfileImage} source={require('../assets/user.png')} />
        </>
      </TouchableHighlight>
      <TextInput
        style={{...styles.input, backgroundColor : colors.myGrey, color: 'gray'}}
        value={CNE}
        placeholder={"CNE *"}
        onChangeText={(text) => setCNE(text)}
        editable={false}
        selectTextOnFocus={false}
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
        value={email}
        placeholder={"Ajouter une adresse e-mail"}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={{...styles.input, backgroundColor : colors.myGrey}}
        value={phone}
        keyboardType='numeric'
        placeholder={"Ajouter un numéro de téléphone"}
        onChangeText={(text) => setPhone(text)}
      />
      <TouchableHighlight {...signUpProps}>
        <>
        <Ionicons name="save" size={23} style={{color: colors.bgColor, marginRight: 5}}></Ionicons>
        <Text style={{ ...styles.SignUpText, color: colors.bgColor }}>Enregister</Text>
        </>
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
  },
  Profile: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '15%',
    maxWidth: '100%',
    overflow: 'hidden',
    borderRadius: '100%',
    marginTop: '10%'
  },
  ProfileImage: {
    width: 100,
    height: 100,
    borderRadius: '100%',
    resizeMode: 'cover'
  },
  modifyImage : {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    width: 100,
    height: 100,
    borderRadius: '100%',
    backgroundColor: 'rgba(108, 122, 137, 0.6)'
  },
  HeaderText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '8%',
    maxHeight: 45,
    width: '50%',
    borderRadius: '100%',
    marginTop: 15,
    marginBottom:20
  },
  SignUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }
});

export default Account
