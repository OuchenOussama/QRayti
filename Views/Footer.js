import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import { useGlobalContext } from './Context';

const Footer = (props) => {

  const colors = useGlobalContext();

  const iconProps = {
    style : {...styles.icon, backgroundColor: colors.bgColor},
    underlayColor : colors.myGrey,
  };

  return (
        <View style={styles.footer}>

            <TouchableHighlight {...iconProps} onPress={() => Actions.Home()}>
              <><Ionicons name={props.code == 1?"home":"home-outline"} size={23} color={colors.darkBlue} />
                <Text style={{...styles.Name, color:colors.darkBlue}}>Acceuil</Text></>
            </TouchableHighlight>

            <TouchableHighlight {...iconProps} onPress={() => Actions.Dossiers()}>
              <>
                <Ionicons name={props.code == 2?"folder-open":"folder-open-outline"} size={23} color={colors.darkBlue} />
                <Text style={{...styles.Name, color:colors.darkBlue}}>Dossiers</Text></>
            </TouchableHighlight>

            <TouchableHighlight {...iconProps} onPress={() => Actions.Notifications()}>
              <><Ionicons name={props.code == 3?"notifications":"notifications-outline"} size={23} color={colors.darkBlue} />
                <Text style={{...styles.Name, color:colors.darkBlue}}>Notifications</Text>
                { props.count != 0 &&
                <View style={{...styles.notificationCount, backgroundColor: colors.myBlue}}>
                  <Text style={{fontWeight: 'bold', color: colors.bgColor}}>2</Text>
                </View>
                }
              </>
            </TouchableHighlight>
        </View>
  )
}

const styles = StyleSheet.create({
  footer : {
    position: 'absolute',
    bottom: 0,
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems : 'center',
    width: '100%',
    height: 60
  },
  icon : {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    height: '100%'
  },
  Name : {
    fontSize: 12,
    marginTop: 5,
  },
  notificationCount : {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
    right: '33%',
    top: '3%',
    backgroundColor: 'red',
    height: 20,
    width: 20,
    borderRadius: '100%',
    opacity: 0.9
  }
});

export default Footer;