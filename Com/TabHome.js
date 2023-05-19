import * as React from 'react';
import { BackHandler, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import Home from '../Home';
import Setting from '../Setting';
import { Alert } from 'react-native';
const Tab = createBottomTabNavigator();
const TabHome = (props) => {
    React.useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to go back?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);

  return (

          <Tab.Navigator
          screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                  switch (route.name) {
                      case "Home":
                          iconName = focused ? 'ios-home' :'ios-home-outline';
                          break;
                      case "Settings":
                          iconName = focused ? "ios-settings" : 'ios-settings-outline';
                          break;
                      default:
                          iconName = focused
                              ? "ios-information-circle"
                              : "ios-information-circle-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
              },
          })}
          >
              <Tab.Screen name="Home" component={Home} options={{headerShown:true,}} />
              <Tab.Screen name="Settings" component={Setting} />
          </Tab.Navigator>
  )
}

export default TabHome

const styles = StyleSheet.create({})