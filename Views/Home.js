import React, { useState, useEffect } from 'react';
import {TouchableOpacity, TouchableHighlight, SafeAreaView, View, StyleSheet, Image, Platform, StatusBar, Text, Button} from 'react-native';
import { useGlobalContext } from './Context';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Footer from './Footer';
import { Ionicons } from '@expo/vector-icons';
import {PieChart} from "react-native-chart-kit";
import { Actions } from 'react-native-router-flux';


const Home = () => {

  const colors = useGlobalContext();

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };

  const data = [
    {
      name: "Présences",
      assuidité: 57,
      color: "#0d98ba"
    },
    {
      name: "Absences",
      assuidité: 7,
      color: "#c1504f"
    }
  ];

  let presencesPerct = (data[0].assuidité/(data[0].assuidité + data[1].assuidité)) * 100;
  let absencesPerct = (data[1].assuidité/(data[0].assuidité + data[1].assuidité)) * 100;

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [readyToScan, setReadyToScan] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Code scané avec es données : ${data} retournées!`);
  };
  
  /* if (hasPermission === null) {
    return <Text>Demande d'autorisation de caméra</Text>;
  }
  if (hasPermission === false) {
    return <Text>Pas d'accès à la caméra!</Text>;
  } */

  return (
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
        <Image style={styles.HeaderLogo} source={require('../assets/QRaytiTextBW30.png')} />
          <View style={styles.Profile}>
          <TouchableHighlight onPress={() => Actions.Profile()}>
            <Image style={styles.ProfileImage} source={require('../assets/user.png')} />
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.welcome}>
        <Text style={{fontSize:  20, color: colors.darkBlue}}>Bonjour, <Text style={{fontWeight: 'bold'}}>Oussama</Text></Text>
        </View>

        <View style={{...styles.stats, backgroundColor: colors.bgColor}}>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', minHeight: '8%'}}>
        <Text style={{...styles.statsText, color:colors.darkBlue}}>STATSISTIQUES D'ASSUIDITE</Text>
        <PieChart style={styles.PieChart} data={data} width={180} height={100} chartConfig={chartConfig} hasLegend={false} accessor={"assuidité"}/>
        </View>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{...styles.statsDot, backgroundColor: '#0d98ba'}} /><Text style={{marginRight: 15}}>{data[0].assuidité} présences ({Math.round(presencesPerct)}%)</Text>
        <View style={{...styles.statsDot, backgroundColor: '#c1504f'}} /><Text>{data[1].assuidité} absences ({Math.round(absencesPerct)}%)</Text>
        </View>

        </View>

        { !readyToScan &&
          <View style={{...styles.scanArea, backgroundColor: colors.myGrey}}>
          <Text style={{...styles.scanText, color: colors.darkBlue, marginBottom: 20}}>CLIQUEZ SUR LA BOUTON</Text>
          <TouchableOpacity 
            onPress={() => setReadyToScan(!readyToScan)}
            style={{...styles.scanButton, backgroundColor: colors.myBlue}}>
            <Ionicons style={{color: colors.myGrey}} name='qr-code' size={75}></Ionicons>
          </TouchableOpacity>
          <Text style={{...styles.scanText, color: colors.darkBlue, marginTop: 20}}>MARQUEZ VOTRE PRESENCE</Text>
          </View>
        }

        { readyToScan &&
          <TouchableOpacity 
          onPress={() => setReadyToScan(!readyToScan)} style={styles.division}>
          <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.BarCodeScanner}
          />
          {scanned && <Button title={'Scanner à nouveau'} onPress={() => setScanned(false)} />}
          </TouchableOpacity>
        }

        <Footer code='1'></Footer>

      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignContent: 'flex-start',
    height: '100%',
    width: '100%',
    position: 'relative',
    marginTop: Platform.OS === 'ios' ? 18 : StatusBar.currentHeight
  },
  header : {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxHeight: 50,
    paddingHorizontal: '5%',
    paddingTop: '5%',
    marginBottom: '2.5%'
  },
  HeaderLogo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  Profile: {
    borderRadius: '100%',
    overflow: 'hidden',
  },
  ProfileImage: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
  },
  welcome : {
    flex:  1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '5%',
    paddingHorizontal: '3%',
    marginVertical: '1.5%',
    opacity: 0.8
  },
  stats : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 150,
    marginHorizontal: '3%',
    borderRadius: '25%',
    marginVertical: '2.5%'
  },
  statsText : {
    fontSize:  20,
    width: '50%',
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 0.7
  },
  division : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '45%',
    paddingHorizontal: '3%',
    marginHorizontal: '3%',
    marginVertical: '2.5%'
  },
  BarCodeScanner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '25%',
    overflow: 'hidden'
  },
  scanButton : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    minWidth: 150,
    maxHeight: 150,
    backgroundColor: 'red'
  },
  scanArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '45%',
    paddingHorizontal: '3%',
    marginHorizontal: '3%',
    marginVertical: '2.5%',
    borderRadius: '25%'
  },
  scanText : {
    fontSize:  18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  PieChart : {
    width: 90
  },
  statsDot : {
    width: 18,
    height: 18,
    borderRadius: '100%',
    backgroundColor: 'red',
    marginRight: 3
  }
});

export default Home;