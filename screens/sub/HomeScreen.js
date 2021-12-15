import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CryptoRow from '../../components/CryptoRow';
import { SvgUri } from 'react-native-svg';
import axios from 'axios';

import { proxyUrl } from '../../constants/URL';

export default function HomeScreen(props) {

  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [cryptos, setCryptos] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let url = `${proxyUrl}curl=https://api.nomics.com/v1/currencies/ticker?key=<api_key>&interval=1d&convert=USD&per-page=${perPage}&page=${currentPage}`;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if(isMounted)
        setCryptos(JSON.parse(json));
    })
    .catch((error) => {
      console.error(error);
    });


    // let response = fetch(url);
    // if (response.ok) {
    //   let json = await response.json();
    //   console.log(json);
    //   if (isMounted)
    //     setCryptos(JSON.parse(json));
    // } else {
    //   console.log("Fetch Error :-S", response.status);
    // }
    return () => {
      isMounted = false;
    };
  }, []);



  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container_center}>
          {
            cryptos ? cryptos.map((crypto) => {
              return (
                <CryptoRow ticker={crypto} key={crypto.name} />
              );
            }) : <Text style={{ color: 'white' }}>waiting...</Text>
          }
        </View>
      </View>
    </SafeAreaView>
  )
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
  container_center: {
    justifyContent: 'center',
    backgroundColor: '#141414',
    color: "white !important",
  },

})