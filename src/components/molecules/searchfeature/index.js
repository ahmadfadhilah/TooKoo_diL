import React from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';

const SeacrhBar = ({onPress}) => {
  return (
    <View style={{marginHorizontal: 16, flexDirection: 'row', paddingTop: 15}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="Put it in here"
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 10,
            height: 40,
            fontSize: 13,
            paddingLeft: 45,
            paddingRight: 20,
            backgroundColor: 'white',
            marginRight: 15,
          }}
        />
        <Image
          source={require('../../../assets/icon/loupe.png')}
          style={{position: 'absolute', top: 8, left: 10}}
        />
      </View>
      <TouchableOpacity
        style={{width: 35, alignItems: 'center', justifyContent: 'center'}}
        onPress={onPress}
        >
        <Image source={require('../../../assets/icon/wwww.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../../assets/icon/chat.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default SeacrhBar;
