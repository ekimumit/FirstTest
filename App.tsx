import React, {useEffect, useState} from 'react';

import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const App = () => {
  useEffect(() => {
    getWeatherInfo()
  
  }, []);

  const [degree,setDegree] = useState('9');
  const [status,setStatus] = useState('Rainy');
  const [oneDay,setOneDay] = useState('Monday');
  const [oneDegree,setOneDegree] = useState('12');
  const [oneStatus,setOneStatus] = useState('Foggy');
  const [twoDay,setTwoDay] = useState('Friday');
  const [twoDegree,setTwoDegree] = useState('15');
  const [twoStatus,setTwoStatus] = useState('Chilly');
  
  const getWeatherInfo = () => {
    return fetch('https://api.open-meteo.com/v1/forecast?latitude=40.81&longitude=29.42&daily=weathercode&current_weather=true&timezone=auto')
      .then(response => response.json())
      .then(json => {
        let info=json.current_weather;

        let locationInfo=json.timezone;
        setDegree(info.temperature)
        setStatus(locationInfo)
        console.log("temperature",info.temperature);
        console.log("location",locationInfo)
      })
      
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./images/bg.jpg')}>
        <View style={styles.topContainer}>
          <Text style={styles.topNu}>{degree}°C</Text>
          <Text style={styles.topDetail}>{status}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.rowLeftText}>{oneDay}</Text>
            </View>
            <View style={styles.rowRight}>
              <Text style={styles.rowRightTop}>{oneDegree}</Text>
              <Text style={styles.rowRightBottom}>{oneStatus}</Text>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 2,
              backgroundColor: 'black',
              alignSelf: 'center',
              marginVertical: 5,
            }}></View>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.rowLeftText}>{twoDay}</Text>
            </View>
            <View style={styles.rowRight}>
              <Text style={styles.rowRightTop}>{twoDegree}</Text>
              <Text style={styles.rowRightBottom}>{twoStatus}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    justifyContent: 'space-between',
  },

  topContainer: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },

  topNu: {
    fontSize: 68,
    fontWeight: 'bold',
    color: '#fafafa',
  },

  topDetail: {
    fontSize: 32,
    fontWeight: '300',
    color: '#fafafa',
  },

  bottomContainer: {
    width: '100%',
    height: '15%',
    backgroundColor: 'transparent',
    marginBottom: '10%',
  },

  row: {
    width: '100%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    flexDirection: 'row',
  },

  rowLeft: {
    height: '100%',
    width: '40%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '6%',
  },

  rowLeftText: {
    fontSize: 18,
    color: '#fafafa',
    fontWeight: '500',
  },

  rowRight: {
    height: '100%',
    width: '60%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '10%',
  },

  rowRightTop: {
    fontSize: 22,
    color: '#fafafa',
    fontWeight: '400',
  },

  rowRightBottom: {
    fontSize: 16,
    color: '#fafafa',
  },
});
