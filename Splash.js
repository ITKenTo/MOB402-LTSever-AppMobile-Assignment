import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = (props) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            props.navigation.navigate('Login');
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color:'#009900',fontSize:30,}}>Hello Nguyễn Văn Dũng</Text>
      </View>
  )
}

export default Splash

const styles = StyleSheet.create({})