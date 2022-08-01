import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const NewsSection= ({onPress}) => {
    return (
        <View style={{paddingTop: 18, paddingHorizontal: 16}}>
            <View style={{position: 'relative', }}>
              <Image source={require('../assets/Image/haha.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
              <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View>
              <View style={{height: 30, width: 115, position: 'absolute', top: 12, left: 16}}>
                <Image source={require('../assets/Image/logo.jpg')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
              </View>
            </View>
            <View style={{paddingTop: 14, paddingBottom: 20, borderBottomColor: 'grey', borderBottomWidth: 1}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Jordan</Text>
              <Text style={{fontSize: 14, color: '#7A7A7A', marginBottom: 11}}>Take flight. As soon as the Air Jordan line debuted in 1985, it started shaping sneaker culture as we know it today.</Text>
              <TouchableOpacity style={{backgroundColor: 'green', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 5}} onPress={onPress}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
          </View>
    )
}
export default NewsSection