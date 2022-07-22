import React from 'react';
import {View, Text, Image} from 'react-native';

const MainFeatureIcon = props => {
  return (
    <View style={{width: '25%', alignItems: 'center', marginBottom: 18}}>
      <View
        style={{
          width: 58,
          height: 58,
          borderWidth: 1,
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={props.img} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 6,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default MainFeatureIcon;
