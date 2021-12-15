import React, { Fragment } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import { PRIMARY_COLOR, BG_COLOR } from '../constants/Colors';
import MainBottomNavigator from '../components/MainBottomNavigator';
// import RepBottomTabNavigator from '../components/RepBottomTabNavigator';
// import CrmBottomTabNavigator from '../components/CrmBottomTabNavigator';
// import LifeBottomTabNavigator from '../components/LifeBottomTabNavigator';
import Root from '../screens/Root';

const Stack = createNativeStackNavigator();

export default function AppScreens() {
  return (
    <Fragment>
      <StatusBar translucent backgroundColor={PRIMARY_COLOR} />
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          }
        }}
      >
        <Stack.Screen 
          name="Root"
          component={Root} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="MainBottomNavigator" 
          component={MainBottomNavigator} 
          options={{ headerShown: false }} 
        />
        {/* <Stack.Screen 
          name="RepBottomTabNavigator" 
          component={RepBottomTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="LifeBottomTabNavigator" 
          component={LifeBottomTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CrmBottomTabNavigator" 
          component={CrmBottomTabNavigator} 
          options={{ headerShown: false }} 
        /> */}
      </Stack.Navigator>
    </Fragment>
  );
}