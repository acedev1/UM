import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Fragment, useState, useEffect } from 'react';
import { Image } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { useDispatch } from 'react-redux';

import HomeScreen from '../screens/sub/HomeScreen';
import ChartScreen from '../screens/sub/ChartScreen';
import AdvertiseScreen from '../screens/sub/AdvertiseScreen';
import BuyScreen from '../screens/sub/BuyScreen';
import SettingScreen from '../screens/sub/SettingScreen';

import SvgIcon from './SvgIcon';
import { PRIMARY_COLOR, BG_COLOR } from '../constants/Colors';
import { SLIDE_STATUS } from '../actions/actionTypes';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const BottomTab = createBottomTabNavigator();

export default function MainBottomNavigator({ navigation }) {
  const dispatch = useDispatch();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarHideOnKeyboard: true,
        headerStyle: {
          backgroundColor: BG_COLOR,
        },
        tabBarShowLabel: false,
        headerTitleStyle: {
          color: "#fff",
          fontFamily: 'Product Sans-Regular'
        },
        tabBarIconStyle: {
          color: "#fff",
        },
        tabBarStyle: {
          backgroundColor: "#000",
          height: 60,
          paddingTop: 10,
          paddingBottom: 10
        }
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fragment>
              {!focused && <Image source={require('../assets/images/home.png')} style={{ width: 30, height: 30 }} />}
              {focused && <Image source={require('../assets/images/logo.png')} style={{ width: 30, height: 30 }} />}
            </Fragment>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Gilroy-Medium'
          },
          title: 'Cryptocurrencies', //Set Header Title
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <HeaderLeftView navigation={navigation} />
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chart"
        component={ChartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fragment>
              {!focused && <Image source={require('../assets/images/chart.png')} style={{ width: 30, height: 30 }} />}
              {focused && <Image source={require('../assets/images/logo.png')} style={{ width: 30, height: 30 }} />}
            </Fragment>
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Gilroy-Medium'
          },
          tabBarActiveTintColor: '#fff',
          title: 'Chart', //Set Header Title
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <HeaderLeftView navigation={navigation} />
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Advertise"
        component={AdvertiseScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fragment>
              {!focused && <Image source={require('../assets/images/advertise-gray.png')} style={{ width: 30, height: 30 }} />}
              {focused && <Image source={require('../assets/images/logo.png')} style={{ width: 30, height: 30 }} />}
            </Fragment>
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Gilroy-Medium'
          },
          tabBarActiveTintColor: '#fff',
          title: 'Advertisement', //Set Header Title
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <HeaderLeftView navigation={navigation} />
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Buy"
        component={BuyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fragment>
              {!focused && <Image source={require('../assets/images/pay.jpg')} style={{ width: 40, height: 40 }} />}
              {focused && <Image source={require('../assets/images/logo.png')} style={{ width: 40, height: 40 }} />}
            </Fragment>
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Gilroy-Medium'
          },
          tabBarActiveTintColor: '#fff',
          title: 'Buy', //Set Header Title
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <HeaderLeftView navigation={navigation} />
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fragment>
              {!focused && <Image source={require('../assets/images/settings-17-128.png')} style={{ width: 30, height: 30 }} />}
              {focused && <Image source={require('../assets/images/logo.png')} style={{ width: 30, height: 30 }} />}
            </Fragment>
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Gilroy-Medium'
          },
          tabBarActiveTintColor: '#fff',
          title: 'Setting', //Set Header Title
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <HeaderLeftView navigation={navigation} />
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation} />
          ),
        }}
      />
      {/* <BottomTab.Screen
        name="CRMScreen"
        component={CRMScreen}
        options={{
          title: 'CRM',
          tabBarIcon: ({focused}) => (
            <Fragment>
              {!focused && <SvgIcon icon="Location_Arrow_Gray" width='20px' height='20px' />}
              {focused && <SvgIcon icon="Location_Arrow" width='20px' height='20px' />}
            </Fragment>
          ),
          headerLeft: () => (
            <TouchableOpacity 
              style={styles.header} 
              activeOpacity={1}
              onPress={() => dispatch({type: SLIDE_STATUS, payload: false})}
            >
            </TouchableOpacity>
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation}/>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Gilroy-Medium'
          },
          tabBarActiveTintColor: PRIMARY_COLOR,
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            dispatch({type: SLIDE_STATUS, payload: false})
            navigation.navigate("CRMScreen");
          },
        })}
      />
      <BottomTab.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          title: 'Calendar',
          tabBarIcon: ({focused}) => (
            <Fragment>
              {!focused && <SvgIcon icon="Calendar_Event_Fill_Gray" width='20px' height='20px' />}
              {focused && <SvgIcon icon="Calendar_Event_Fill" width='20px' height='20px' />}
            </Fragment>
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation}/>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Gilroy-Medium'
          },
          tabBarActiveTintColor: PRIMARY_COLOR,
        }}
      />
      <BottomTab.Screen
        name="PipelineScreen"
        component={PipelineScreen}
        options={{
          title: 'Pipeline',
          tabBarIcon: ({focused}) => (
            <Fragment>
              {!focused && <SvgIcon icon="Pipeline_Gray" width='20px' height='20px' />}
              {focused && <SvgIcon icon="Pipeline" width='20px' height='20px' />}
            </Fragment>
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation}/>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Gilroy-Medium'
          },
          tabBarActiveTintColor: PRIMARY_COLOR,
        }}
      />
      <BottomTab.Screen
        name="RepMore"
        component={RepMoreScreen}
        options={{
          title: 'More',
          tabBarIcon: ({focused}) => (
            <Fragment>
              {!focused && <SvgIcon icon="Android_More_Horizontal_Gray" width='20px' height='20px' />}
              {focused && <SvgIcon icon="Android_More_Horizontal" width='20px' height='20px' />}
            </Fragment>
          ),
          headerRight: () => (
            <HeaderRightView navigation={navigation}/>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Gilroy-Medium'
          },
          tabBarActiveTintColor: PRIMARY_COLOR,
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

function HeaderLeftView() {

  const hamburgerStyle = {
    marginLeft: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 20,
    height: 20,
  }

  return (
    <Image source={require('../assets/images/hamburger-white.png')} style={hamburgerStyle} />
  )
}

function HeaderRightView() {

  const searchStyle = {
    marginRight: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 20,
    height: 20,
  }

  return (
    <Image source={require('../assets/images/white-search-icon-png-16.jpg')} style={searchStyle} />
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: BG_COLOR,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: '100%'
  }
})