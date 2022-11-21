import React from 'react'
import Footer from './Footer';
import { StyleSheet, Text, SafeAreaView } from 'react-native'

const Dossiers = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>DOSSIERS</Text>
        <Footer code='2'></Footer>
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
  }
});
export default Dossiers