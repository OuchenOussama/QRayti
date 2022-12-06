import React from 'react';
import {ScrollView, View, StyleSheet, Platform, StatusBar, Text, TouchableHighlight} from 'react-native';
import { useGlobalContext } from './Context';
import Footer from './Footer';
import { Ionicons } from '@expo/vector-icons';

const Notifications = () => {

  const colors = useGlobalContext();

  return (
    <>
      <View style={styles.container}>

        <View style={styles.refreshButton}>
        <TouchableHighlight 
          style={{...styles.refreshTouchable}}
          onPress={() => console.log("refresh activity")}
          underlayColor='transparent'>
          <Ionicons name="refresh-circle" size={40} color={colors.darkBlue}></Ionicons>
        </TouchableHighlight>
        </View>
        
      <View style={{...styles.Notification, backgroundColor: colors.myGrey}}>
        <View>
          <Text style={{maxWidth: '95%', color: colors.darkBlue}}>Vous etes invité par 
          <Text style={{fontWeight: 'bold'}}> Pr. Mohamed Ali </Text> 
          à marquer votre présence dans la séance du module <Text style={{fontWeight: 'bold'}}>
            Nom complet du module</Text></Text>
          <Text style={{color: colors.myDarkGrey}}>8:30, le lundi 1 Oct 2022</Text>
        </View>
        <Ionicons name='scan-circle' size={30} style={{color: colors.darkBlue}}></Ionicons>
      </View>

      <View style={{...styles.Notification, backgroundColor: colors.myGrey}}>
        <View>
          <Text style={{maxWidth: '95%', color: colors.darkBlue}}>Vous etes invité par 
          <Text style={{fontWeight: 'bold'}}> Pr. Mohamed Ali </Text> 
          à marquer votre présence dans le module <Text style={{fontWeight: 'bold'}}>
            Nom complet du module</Text></Text>
          <Text style={{color: colors.myDarkGrey}}>8:30 - 10:30 | Lundi, 1 Oct 2022</Text>
        </View>
        <Ionicons name='scan-circle' size={30} style={{color: colors.darkBlue}}></Ionicons>
      </View>

      </View>
        <Footer code='3' count='0'></Footer>
        </>
          )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    maxHeight: '85%',
    maxWidth: '100%',
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'ios' ? 18 : StatusBar.currentHeight,
    },
  Notification : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    maxHeight: '14%',
    width: '97%',
    marginVertical: '2.5%',
    paddingHorizontal: '5%',
    borderRadius: '15%'
  },
  refreshButton:{
    position: 'absolute',
    top: '5%', 
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  refreshTouchable : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: '100%'
  }
});

export default Notifications;