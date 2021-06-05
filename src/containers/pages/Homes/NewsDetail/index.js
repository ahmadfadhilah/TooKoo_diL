import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const NewsDetail = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.head}>
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
  },
  image: {
    width: '100%',
    height: '128%',
  },
});
