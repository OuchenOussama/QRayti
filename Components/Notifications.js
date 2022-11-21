import React from 'react';
import {ScrollView, View, StyleSheet, Platform, StatusBar, Text} from 'react-native';
import { useGlobalContext } from './Context';
import Footer from './Footer';
import { Ionicons } from '@expo/vector-icons';

const Notifications = () => {

  const colors = useGlobalContext();

  return (
    <>
      <ScrollView style={styles.container}>
        
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
        <View style={{...styles.Row, backgroundColor: colors.myGrey}}>
        <View>
          <Text style={{color: colors.darkBlue}}>M34 <Text style={{fontWeight: 'bold'}}>• Nom complet du module</Text></Text>
          <Text style={{color: colors.myDarkGrey}}>8:30 - 10:30 | Lundi, 1 Oct 2022</Text>
          <Text style={{color: colors.darkBlue}}>Pr. Mohamed Ali</Text>
        </View>
        <Ionicons name='ios-checkmark-circle' size={30} style={{color: colors.myBlue}}></Ionicons>
        </View>
        
        </ScrollView>
        <Footer code='3' count='0'></Footer>
        </>
          )
}

const styles = StyleSheet.create({
  container : {
    marginTop: Platform.OS === 'ios' ? 18 : StatusBar.currentHeight,
    },
  Row : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    minHeight: '10%',
    width: '95%',
    marginVertical: '2.5%',
    paddingHorizontal: '5%',
    borderRadius: '15%'
  },
});

export default Notifications;