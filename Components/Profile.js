import React from 'react';
import {ScrollView, TouchableOpacity, SafeAreaView, View, StyleSheet, Image, Platform, StatusBar, Text} from 'react-native';
import { useGlobalContext } from './Context';
import { Ionicons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

const Profile = () => {

  const colors = useGlobalContext();

  return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => Actions.pop()} style={styles.Exit}>
        <Ionicons name="chevron-back" size={30} color='grey' />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.Account()} style={styles.Edit}>
        <Ionicons name="person-circle-outline" size={30} color='grey' />
        </TouchableOpacity>

        <View style={styles.Profile}>
          <Image style={styles.ProfileImage} source={require('../assets/user.png')} />
        </View>

        <View style={styles.firstRow}>
          <Text style={{...styles.Name, color: colors.darkBlue}}>Ouchen Oussama</Text>
          <Text style={{color: colors.darkBlue}}>D137272036 • GI • S5</Text>
          </View>
        <View style={{...styles.HR, borderColor: colors.darkBlue}}></View>
        <Text>• VOS DERNIERES SEANCES •</Text>
        <ScrollView>
        <View style={{...styles.Row, backgroundColor: colors.myGrey}}>
        <View>
          <Text style={{color: colors.darkBlue}}>M34 <Text style={{fontWeight: 'bold'}}>• Nom complet du module</Text></Text>
          <Text style={{color: colors.myDarkGrey}}>8:30 - 10:30 | Lundi, 1 Oct 2022</Text>
          <Text style={{color: colors.darkBlue}}>Pr. Mohamed Ali</Text>
        </View>
        <Ionicons name='ios-checkmark-circle' size={30} style={{color: colors.myBlue}}></Ionicons>
        </View>
        <View style={{...styles.Row, backgroundColor: colors.myGrey}}>
        <View>
          <Text style={{color: colors.darkBlue}}>M34 <Text style={{fontWeight: 'bold'}}>• Nom complet du module</Text></Text>
          <Text style={{color: colors.myDarkGrey}}>8:30 - 10:30 | Lundi, 1 Oct 2022</Text>
          <Text style={{color: colors.darkBlue}}>Pr. Mohamed Ali</Text>
        </View>
        <Ionicons name='ios-close-circle-sharp' size={30} style={{color: '#800020'}}></Ionicons>
        </View>
        <View style={{...styles.Row, backgroundColor: colors.myGrey}}>
        <View>
          <Text style={{color: colors.darkBlue}}>M34 <Text style={{fontWeight: 'bold'}}>• Nom complet du module</Text></Text>
          <Text style={{color: colors.myDarkGrey}}>8:30 - 10:30 | Lundi, 1 Oct 2022</Text>
          <Text style={{color: colors.darkBlue}}>Pr. Mohamed Ali</Text>
        </View>
        <Ionicons name='ios-checkmark-circle' size={30} style={{color: colors.myBlue}}></Ionicons>
        </View>
        <View style={{...styles.Row, backgroundColor: colors.myGrey}}>
        <View>
          <Text style={{color: colors.darkBlue}}>M34 <Text style={{fontWeight: 'bold'}}>• Nom complet du module</Text></Text>
          <Text style={{color: colors.myDarkGrey}}>8:30 - 10:30 | Lundi, 1 Oct 2022</Text>
          <Text style={{color: colors.darkBlue}}>Pr. Mohamed Ali</Text>
        </View>
        <Ionicons name='ios-checkmark-circle' size={30} style={{color: colors.myBlue}}></Ionicons>
        </View>
        </ScrollView>

      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 18 : StatusBar.currentHeight
    },
  Profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    minHeight: '10%',
    borderRadius: '100%',
    overflow: 'hidden',
    marginTop: '10%'
  },
  ProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  Exit : {
    position : 'absolute',
    top: '3%',
    left: '3%'
  },
  Edit : {
    position : 'absolute',
    top: '3%',
    right: '5%'
  },
  Name: {
    fontSize: 28
  },
  firstRow : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '10%',
    marginVertical: '2%',
  },
  HR : {
    borderBottomWidth : 1.2,
    width: '85%',
    marginTop: '2%',
    marginBottom: '5%',
    opacity: 0.8,
    borderRadius: '100%'
  },
  Row : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '10%',
    marginVertical: '2.5%',
    paddingHorizontal: '5%',
    borderRadius: '15%'
  },
});

export default Profile;