import React,{useState, useEffect} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { SvgUri } from 'react-native-svg';
import Sparkline from 'react-native-sparkline'

import { proxyUrl } from '../constants/URL';

export default function Root({ navigation }) {
  const data = Array.from({ length: 30 }).map(
    (unused, i) => (i - 10) * Math.random()
  )
  const data1 = Array.from({ length: 30 }).map(
    (unused, i) => (i + 1) * Math.random()
  )
  const payload = useSelector(state => state.selection.payload);

  const [cryptos, setCryptos] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let url = `${proxyUrl}curl=https://api.nomics.com/v1/currencies/ticker?key=<api_key>&ids=BTC,ETH&interval=1d&convert=USD`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (isMounted)
          setCryptos(JSON.parse(json));
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container_top}>
          <Image source={require('../assets/images/logo.png')} style={{ width: 100, height: 100 }} />
          <Text style={styles.title}>Unbiased Crypto</Text>
        </View>
        <View style={styles.container_center}>
          {cryptos && <TouchableOpacity style={styles.selection_main} onPress={() => navigation.navigate("")}>
            <SvgUri
              width="40"
              height="40"
              uri="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"
              style={{ marginRight: 10 }}
            />
            <View style={{ width: '25%' }}>
              <Text style={styles.selectionText}>Bitcoin</Text>
              <Text style={styles.price_text}>{cryptos[0].symbol}</Text>
              <Text style={styles.change_pct_text}>{cryptos[0]['1d'].price_change_pct}%</Text>
            </View>
            <View style={{ width: 100, marginLeft: -10 }}>
              {/* <Sparkline data={data}>
                <Sparkline.Line />
              </Sparkline> */}
            </View>
          </TouchableOpacity>
          }
          {cryptos && <TouchableOpacity style={styles.selection_main} onPress={() => navigation.navigate("")}>
            <SvgUri
              width="40"
              height="40"
              uri="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg"
              style={{ marginRight: 10 }}
            />
            <View style={{ width: '25%' }}>
              <Text style={styles.selectionText}>Ethereum</Text>
              <Text style={styles.price_text}>{cryptos[1].symbol}</Text>
              <Text style={styles.change_pct_text}>{cryptos[1]['1d'].price_change_pct}%</Text>
            </View>
            <View style={{ width: 100, marginLeft: -10 }}>
              {/* <Sparkline data={data1}>
                <Sparkline.Line />
              </Sparkline> */}
            </View>
          </TouchableOpacity>
          }

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.selection_dash} onPress={() => navigation.navigate("MainBottomNavigator")}>
              <Image source={require('../assets/images/home.png')} style={{ width: 30, height: 30 }} />
              <View>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 20 }}>Dashboard</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selection_dash} onPress={() => navigation.navigate("")}>
              <Image source={require('../assets/images/chart.png')} style={{ width: 30, height: 30 }} />
              <View>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 20 }}>Chart</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.selection_dash} onPress={() => navigation.navigate("")}>
              <Image source={require('../assets/images/advertise-gray.png')} style={{ width: 30, height: 30 }} />
              <View>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 20 }}>Advertise</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selection_dash} onPress={() => navigation.navigate("")}>
              <Image source={require('../assets/images/pay.jpg')} style={{ width: 40, height: 40, marginTop: -5 }} />
              <View>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 20, marginTop: -5 }}>Buy</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* <TouchableOpacity style={styles.selection} onPress={() => navigation.navigate("RepBottomTabNavigator")}>
            <Text style={styles.selectionText}>Rep</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selection} onPress={() => navigation.navigate("LifeBottomTabNavigator")}>
            <Text style={styles.selectionText}>{payload.user_scopes.geo_life.project_custom_name}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selection} onPress={() => navigation.navigate("CrmBottomTabNavigator")}>
            <Text style={styles.selectionText}>{payload.user_scopes.geo_crm.project_custom_name}</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#141414',
    height: '100%',
    color: "white",
    padding: 20,
    fontFamily: 'inter',
  },
  container_top: {
    marginLeft: -30,
    marginTop: 50,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#141414',
    color: "white",
  },
  container_center: {
    justifyContent: 'center',
    backgroundColor: '#141414',
    color: "white",
  },
  selection_main: {
    padding: 10,
    borderRadius: 7,
    height: 80,
    backgroundColor: 'black',
    marginBottom: 10,
    flexDirection: 'row',
  },
  selection_dash: {
    padding: 10,
    borderRadius: 7,
    height: 80,
    backgroundColor: 'black',
    marginBottom: 10,
    width: '48%',
    marginRight: '4%',
  },
  selection: {
    padding: 10,
  },
  selectionText: {
    color: "white",
    fontSize: 18
  },
  change_pct_text: {
    color: "white",
    fontSize: 14,
    color: 'red',
  },
  price_text: {
    color: "white",
    fontSize: 16
  },
  title: {
    marginVertical: 30,
    fontSize: 30,
    color: 'white',
    fontFamily: 'inter',
    fontWeight: 'bold',
  }
})