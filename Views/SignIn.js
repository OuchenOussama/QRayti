import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    marginTop: Platform.OS === 'ios' ? 18 : StatusBar.currentHeight
  }
});

export default SignIn