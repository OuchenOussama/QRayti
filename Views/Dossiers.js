import React from 'react'
import Footer from './Footer';
import { useGlobalContext } from './Context';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'

const Dossiers = () => {

  const colors = useGlobalContext();

  return (
    <>
    <SafeAreaView style={styles.container}>

        <Text style={styles.H1}>• VOS INSCRIPTIONS •</Text>

        <View style={{...styles.Module, backgroundColor: colors.myGrey, borderColor: colors.darkBlue}}>
          <View style={{...styles.moduleCode, backgroundColor: colors.darkBlue}}><Text style={{...styles.moduleCodeText, color: colors.bgColor}}>M21</Text></View>
          <View style={styles.moduleName}><Text style={styles.moduleGenText}>NOM DU MODULE</Text></View>
          <View style={{...styles.moduleSemester, borderColor: colors.darkBlue}}><Text style={styles.moduleGenText}>S5</Text></View>
        </View>
        <View style={{...styles.Module, backgroundColor: colors.myGrey, borderColor: colors.darkBlue}}>
          <View style={{...styles.moduleCode, backgroundColor: colors.darkBlue}}><Text style={{...styles.moduleCodeText, color: colors.bgColor}}>M21</Text></View>
          <View style={styles.moduleName}><Text style={styles.moduleGenText}>NOM DU MODULE</Text></View>
          <View style={{...styles.moduleSemester, borderColor: colors.darkBlue}}><Text style={styles.moduleGenText}>S5</Text></View>
        </View>
        <View style={{...styles.Module, backgroundColor: colors.myGrey, borderColor: colors.darkBlue}}>
          <View style={{...styles.moduleCode, backgroundColor: colors.darkBlue}}><Text style={{...styles.moduleCodeText, color: colors.bgColor}}>M21</Text></View>
          <View style={styles.moduleName}><Text style={styles.moduleGenText}>NOM DU MODULE</Text></View>
          <View style={{...styles.moduleSemester, borderColor: colors.darkBlue}}><Text style={styles.moduleGenText}>S5</Text></View>
        </View>
        <View style={{...styles.Module, backgroundColor: colors.myGrey, borderColor: colors.darkBlue}}>
          <View style={{...styles.moduleCode, backgroundColor: colors.darkBlue}}><Text style={{...styles.moduleCodeText, color: colors.bgColor}}>M21</Text></View>
          <View style={styles.moduleName}><Text style={styles.moduleGenText}>NOM DU MODULE</Text></View>
          <View style={{...styles.moduleSemester, borderColor: colors.darkBlue}}><Text style={styles.moduleGenText}>S5</Text></View>
        </View>
        <View style={{...styles.Module, backgroundColor: colors.myGrey, borderColor: colors.darkBlue}}>
          <View style={{...styles.moduleCode, backgroundColor: colors.darkBlue}}><Text style={{...styles.moduleCodeText, color: colors.bgColor}}>M21</Text></View>
          <View style={styles.moduleName}><Text style={styles.moduleGenText}>NOM DU MODULE</Text></View>
          <View style={{...styles.moduleSemester, borderColor: colors.darkBlue}}><Text style={styles.moduleGenText}>S5</Text></View>
        </View>
        <View style={{...styles.Module, backgroundColor: colors.myGrey, borderColor: colors.darkBlue}}>
          <View style={{...styles.moduleCode, backgroundColor: colors.darkBlue}}><Text style={{...styles.moduleCodeText, color: colors.bgColor}}>M21</Text></View>
          <View style={styles.moduleName}><Text style={styles.moduleGenText}>NOM DU MODULE</Text></View>
          <View style={{...styles.moduleSemester, borderColor: colors.darkBlue}}><Text style={styles.moduleGenText}>S5</Text></View>
        </View>
        
        <Text style={styles.H6}>Vous pouvez modifier vos inscriptions et les informations de compte à partir de votre profil.</Text>

    </SafeAreaView>
    
    <Footer code='2'></Footer>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '95%',
    width: '100%',
    position: 'relative',
    marginTop: Platform.OS === 'ios' ? 18 : StatusBar.currentHeight
  },
  H1 : {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10
  },
  Module : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: '6%',
    width: '80%',
    marginVertical: '2%',
    borderRadius: '100%',
    borderWidth: 2
  },
  moduleCode : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '101%',
    maxWidth: '20%',
    borderBottomLeftRadius: '15%',
    borderTopLeftRadius: '15%'
  },
  moduleCodeText : {
    fontWeight: 'bold',
    fontSize: 15
  },
  moduleName : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    maxWidth: '68%'
  },
  moduleSemester : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '101%',
    maxWidth: '12%',
    borderBottomRightRadius: '100%',
    borderTopRightRadius: '100%',
    borderLeftWidth: 2
  },
  moduleGenText : {
    fontSize: 15
  },
  H6 : {
    fontSize: 11,
    maxWidth: '80%',
    textAlign: 'center',
    opacity: 0.3,
    marginVertical: '3%'
  },
});
export default Dossiers