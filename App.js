import { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Splash';
import Home from './Home';
import Login from './Properties/Login';
import Signup from './Properties/Signup';
import TabHome from './Com/TabHome';
import Chitiet from './Chitiet';
import Password from './Com/Password';

const StackDemo = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackDemo.Navigator initialRouteName='Splash'>
        <StackDemo.Screen name='Splash' component={Splash} options={{ headerShown:false }} />
        <StackDemo.Screen name="Login" component={Login} options={{headerShown:false}} />
        <StackDemo.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <StackDemo.Screen name='Home' component={Home} options={{ title: 'Giới thiệu' }} />
        <StackDemo.Screen name='TabHome' component={TabHome} options={{ headerShown: false }} />
        <StackDemo.Screen name='ChiTiet' component={Chitiet} options={{title:'Chi Tiết'}} />
        <StackDemo.Screen name='Passwd' component={Password} options={{ title: 'Đổi Mật Khẩu' }} />
        {/* viết tiếp các màn hình khác vào đây */}
      </StackDemo.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
