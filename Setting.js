import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
const Setting = (props) => {
  const logout = () => {
    props.navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <View style={styles.nd}>

        <TouchableOpacity style={{ flexDirection: 'row', width: '100%', marginBottom: 10 }}

          onPress={() => props.navigation.navigate('Passwd')}>
          <View style={{ flexDirection: 'row', width: '100%', elevation: 10, backgroundColor: '#33CCFF', borderRadius: 15, padding: 10 }}>
            <Ionicons name='lock-closed-outline' size={50} />
            <Text style={{ fontSize: 25, fontWeight: '500', color: '#555555', margin: 7, color: 'white' }}>Đổi Mật Khẩu</Text>
          </View>
        </TouchableOpacity>
  
        <TouchableOpacity style={{ flexDirection: 'row', width: '100%' }} onPress={logout}>
          <View style={{ flexDirection: 'row', width: '100%', elevation: 10, backgroundColor: '#33CCFF', borderRadius: 15, padding: 10 }}>
            <Ionicons name='log-out-outline' size={50}/>
            <Text style={{ fontSize: 25, fontWeight: '500', color: '#555555', margin: 7, color: 'white' }}>Log out</Text>
          </View>
        </TouchableOpacity>




      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Creat: {
    backgroundColor: '#1877f2',
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40

  },
  nd: {
    height: '75%',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 30,
    elevation: 10,
    padding: 20
  }
})