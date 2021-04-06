import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';


const NewsBar = () => {
    return(
    <View style={{padding: 16}}>
        <View style={{height: 30, width: 55,}}>
            <Image source={require('../../../assets/icon/gambar.jpeg')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15, marginBottom: 18}}>Ayo jangan lupa beribadah</Text>
        <View style={{flexDirection: 'row', marginBottom: 16}}>
          <View>
            <Image source={require('../../../assets/icon/download.jpeg')} style={{width: 100, height: 110}}/>
          </View>
          <View style={{marginLeft: 16, flex: 1}}>
            <Text style={{fontSize: 15, color: '#2E2E2E', fontWeight: 'bold'}}>Connect with facebook</Text>
            <Text style={{fontSize: 15, width: '80%', color: '#1C1C1C'}}>Login faster without verification Account</Text>
          </View>
        </View>
            <TouchableOpacity style={{backgroundColor: 'green', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 5}}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Connect</Text>
            </TouchableOpacity>
        <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 18}}></View>
    </View>
    )
}
export default NewsBar