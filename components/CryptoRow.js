import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Fragment, useState, useEffect } from 'react';
import { Image } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { useDispatch } from 'react-redux';

import SvgIcon from './SvgIcon';
import { PRIMARY_COLOR, BG_COLOR } from '../constants/Colors';
import { SvgUri } from 'react-native-svg';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { proxyUrl } from '../constants/URL';

export default function MainBottomNavigator({ navigation, ticker }) {

  const [info, setInfo] = useState(0);
  const [logo, setLogo] = useState(0);

  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          {
            ticker.logo_url && ticker.logo_url.substring(ticker.logo_url.length - 3) == 'svg' ? <SvgUri
              width="40"
              height="40"
              uri={ticker.logo_url}
              style={{ marginRight: 10 }}
            /> :
              <Image source={{ uri: ticker.logo_url }} style={{ width: 40, height: 40, marginRight: 10 }} />
          }
          <View style={{ width: '30%' }}>
            <Text style={{ color: 'white' }}>{ticker.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ backgroundColor: 'black', color: 'white', marginRight: 5, borderRadius: 5, paddingLeft: 3, paddingRight: 3 }}>{ticker.rank}</Text>
              <Text style={{ color: 'white' }}>{ticker.symbol}</Text>
            </View>
          </View>
          <View style={{ width: '50%' }}>

          </View>
          <View style={{ position:'absolute', right: 0, justifyContent: 'flex-end' }}>
            <Text style={{ color: ticker['1d'].price_change > 0 ? 'green' : 'red', position: 'absolute', right:0, top: 0, fontSize:14  }}>${parseFloat(ticker.price).toFixed(3)}</Text>
            <Text style={{ color: ticker['1d'].price_change > 0 ? 'green' : 'red', position: 'absolute', right:0, top: 20, fontSize: 13 }}>{parseFloat(ticker['1d'].price_change_pct).toFixed(3)}%</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    height: 50,
    color: "white",
    fontFamily: 'inter',
  },
  container_center: {
    justifyContent: 'center',
    backgroundColor: '#141414',
    color: "white !important",
  },

})