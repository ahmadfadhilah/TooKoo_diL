import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const NewsDetail = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.head}>
        <Icon name="chevron-back-circle-outline" size={33} style={Styles.icon}/>
        <Image
          source={require('../../../../assets/icon/125.jpeg')}
          style={Styles.image}
        />
        {/* <Text>1ppqpp</Text> */}
      </View>
    </View>
  );
};
export default NewsDetail;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  head: {
    width: '100%',
    height: 240,
    position: 'relative',
    flexDirection: 'row'
  },
  image: {
    width: '100%',
    height: '128%',
  },
  icon: {
      position: 'absolute'
  }
});
