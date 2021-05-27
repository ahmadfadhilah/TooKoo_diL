import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Hhhh from 'react-native-vector-icons/Ionicons';

export default function Keranjang() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.iconBack}>
          <Hhhh name="arrow-back" size={24} style={styles.back}/>
          <Text style={styles.text}>Keranjang saya</Text>
        </View>
        <View style={styles.iconChat}>
          <Icon name="message1" size={25} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
  },
  iconBack: {
    flexDirection: 'row',
  },
  back: {
    paddingRight: 23
  },
  text: {
    fontSize: 20,
    bottom: 3,
    fontWeight: '800'
  }
})