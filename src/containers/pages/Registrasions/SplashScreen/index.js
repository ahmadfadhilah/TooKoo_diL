import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Image} from 'react-native';

export default class SplashScreen extends Component {
  componentDidMount() {
    AsyncStorage.getItem('token').then(token =>
      console.log('Masuk bos token nya'),
    );
  }

  render() {
    setTimeout(() => {
      this.props.navigation.replace('Home');
    }, 3000);

    const gradienHeight = 620;
    const gradienBackground = '#2FF3E0';
    const data = Array.from({length: gradienHeight});
    return (
      <View style={Styles.container}>
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              position: 'absolute',
              backgroundColor: gradienBackground,
              height: 1,
              bottom: gradienHeight - i,
              right: 0,
              left: 0,
              zIndex: 2,
              opacity: (1 / gradienHeight) * (i + 1),
            }}
          />
        ))}
        <View style={Styles.head}>
          <Image source={require('../../../../assets/icon/logo.jpg')} style={{width: 200, height: '22%', borderRadius: 4}}/>
        </View>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  Image: {
    width: 200,
    height: '22%',
    borderRadius: 4,
    position: 'absolute'
  },
  head: {
    alignItems: 'center',
    paddingTop: 100,
  }
});
